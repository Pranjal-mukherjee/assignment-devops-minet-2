package com.minet.userservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.minet.userservice.dto.*;
import com.minet.userservice.exception.ErrorResponse;
import com.minet.userservice.exception.ExceptionHandlers;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.serviceimpl.EmailService;
import com.minet.userservice.serviceimpl.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDateTime;

import static com.minet.userservice.constants.Constant.SENT_EMAIL;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(value = UserController.class,excludeAutoConfiguration = {SecurityAutoConfiguration.class})
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserServiceImpl userService;

    @MockBean
    private EmailService emailService;

    @Mock
    private PasswordEncoder passwordEncoder;

    @MockBean
    private Logger logger;

    TokenRequest tokenRequest;
    private ObjectMapper mapper;


    @BeforeEach
    public void setup(){
        mapper = new ObjectMapper();
        tokenRequest = new TokenRequest("dummyToken");
    }


    @Test
    void getUserByEmailTest() throws Exception {
        String email = "john@example.com";
        UserResponseDto user = new UserResponseDto(1,"John", email,1000,LocalDateTime.now());

        when(userService.getUserByEmail(email)).thenReturn(user);

        mockMvc.perform(get("/users/john@example.com").contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(tokenRequest))).andExpect(status().isOk());
    }

    @Test
    void getUsersByEmailTest_ThrowsException() throws Exception {
        String email = "john@example.com";
        UserNotFoundException exception = new UserNotFoundException("User not Found with email : "+email);
        ExceptionHandlers exceptionHandlers = new ExceptionHandlers();
        ResponseEntity<ErrorResponse> response = exceptionHandlers.handleException(exception);

        assertEquals(HttpStatus.NOT_FOUND.value(),response.getStatusCode().value());

    }

    @Test
    void createUser() throws Exception {
        String email = "john@example.com";
        String password = passwordEncoder.encode("Hello@123");
        UserRequestDto userRequest = new UserRequestDto(1,"John",  email,password,1000, LocalDateTime.now());

        when(userService.createUser(userRequest)).thenReturn(userRequest);

        String payload = "{\"id\": 1, \"name\": \"rajesh Doe\", \"email\": \"rajesh@gmail.com\",\"password\":\"Pass@123\",\"userBalance\": 435}";


        mockMvc.perform(post("/users").contentType(MediaType.APPLICATION_JSON).content(payload)).andExpect(status().isOk());
    }

    @Test
    void createUser_thorws_exception() throws Exception {
        String email = "john@example.com";
        String password = passwordEncoder.encode("Hello@123");
        UserRequestDto userRequest = new UserRequestDto( 1,"", email,password, 1000, LocalDateTime.now());

        when(userService.createUser(userRequest)).thenReturn(userRequest);

        String payload = "{\"id\": 1, \"name\": \"\", \"email\": \"rajesh@gmail.com\",\"password\":\"$2a$10$TqzNnZa////f4LOAVd4bn.dI5UL/xUWMamUdVPET5fNVkW9ZsAwlW\",\"creditBalance\": 4.35}";


        mockMvc.perform(post("/users").contentType(MediaType.APPLICATION_JSON).content(payload)).andExpect(status().isBadRequest());
    }

    @Test
    void updateUser() throws Exception{
        String email = "john@example.com";
        String payload = "{\"id\": 1, \"name\": \"rajesh Doe\", \"email\": \"rajesh\", \"creditBalance\": 4.35}";
        UserRequestDto user = new UserRequestDto( 1,"John Doe", email,passwordEncoder.encode("Password"),1000, LocalDateTime.now());
        UserRequestDto updateUser = new UserRequestDto(1,"John Doe", email,passwordEncoder.encode("Password"),1000, LocalDateTime.now());

        mockMvc.perform(put("/users/john@example.com").contentType(MediaType.APPLICATION_JSON).content(payload)).andExpect(status().isOk());
    }

    @Test
    void givenTokenRequest_whenTokenRequestValid_thenValidateToken() throws Exception {
        TokenRequest tokenRequest = new TokenRequest("dummyToken");
        doNothing().when(userService).validateToken(any(TokenRequest.class));
        mockMvc.perform(post("/users/validateToken")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(tokenRequest))
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(status().isOk());
    }

    @Test
    void givenAuthRequest_whenUserIsValid_thenLoginUser() throws Exception {
        AuthRequest authRequest=new AuthRequest("email","password");
        TokenResponse token=new TokenResponse(1,"name","raj@gmail.com",12.0,"dummyToken");
        when(userService.loginUser(authRequest)).thenReturn(token);
        mockMvc.perform(post("/users/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(authRequest))
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(status().isOk());
    }

    @Test
    void givenEmail_thenSendOtp() throws Exception {
        String email = "test@gmail.com";
        when(emailService.sendEmail(email)).thenReturn(SENT_EMAIL);
        mockMvc.perform(get("/users/reset/test@gmail.com")).andExpect(status().isOk());
    }

    @Test
    void givenEmailAndOtp_thenValidateOtp() throws Exception {
        Boolean valid = true;
        String email = "test@gmail.com";
        String otp = "12345678";
        when(userService.validateOtp(email,otp)).thenReturn(valid);
        mockMvc.perform(get("/users/otp/test@gmail.com/12345678")).andExpect(status().isOk());
    }

}