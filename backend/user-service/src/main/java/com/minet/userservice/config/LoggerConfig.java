package com.minet.userservice.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoggerConfig {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @Bean
    public Logger logger(){
        return logger;
    }

}