package com.minet.apigateway.filter;

import com.minet.apigateway.dto.ErrorResponse;
import com.minet.apigateway.dto.TokenResponse;
import com.minet.apigateway.dto.UserResponse;
import com.minet.apigateway.exception.AccessDeniedException;
import com.minet.apigateway.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.cloud.netflix.eureka.EurekaDiscoveryClient;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ServerWebExchange;


@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {
    @Autowired
    private RouteValidator routeValidator;
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private EurekaDiscoveryClient discoveryClient;
    public AuthenticationFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            if (routeValidator.isSecured(exchange.getRequest())){
                if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)){
                    throw new AccessDeniedException("missing authorization header");
                }
                String authHeader=exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                if (authHeader!=null && authHeader.startsWith("Bearer ")){
                    authHeader=authHeader.substring(7);
                }
                try {
                   ServerWebExchange newExchange=validateTokenAndAddHeader(exchange,authHeader);
                   return chain.filter(newExchange);
                }
                catch (Exception e){
                    throw new AccessDeniedException(e.getMessage());
                }
            }
            return chain.filter(exchange);
        });
    }
    public ServerWebExchange validateTokenAndAddHeader(ServerWebExchange exchange, String authHeader){

        restTemplate.postForObject(
                getUserServiceUrl() + "/users/validateToken",
                new TokenResponse(authHeader),
                ErrorResponse.class
        );
        String userEmailId = new JwtService().getEmailFromJwtToken(authHeader);
        UserResponse userResponse = restTemplate.getForObject(getUserServiceUrl() + "/users/" + userEmailId, UserResponse.class);

        ServerHttpRequest request = exchange.getRequest()
                .mutate()
                .header("User-Id", userResponse.getId().toString())
                .build();
        return exchange.mutate().request(request).build();

    }
    public String getUserServiceUrl() {
        return discoveryClient.getInstances("user-service")
                .stream()
                .findFirst()
                .map(serviceInstance -> serviceInstance.getUri().toString())
                .orElseThrow(() -> new RuntimeException("User service not available"));
    }


    public static class Config{

    }
}