package com.minet.userservice.controller;

import com.minet.userservice.dto.*;
import com.minet.userservice.exception.ErrorResponse;
import com.minet.userservice.service.UserService;
import com.minet.userservice.serviceimpl.EmailService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/users")
@Slf4j
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    private final Logger logger;

    private final EmailService emailService;

    @GetMapping("/{email}")
    public ResponseEntity<UserResponseDto> getUsersByEmail(@PathVariable String email){
        logger.info(" getUserByEmail {}", email);
        UserResponseDto userDto = userService.getUserByEmail(email);
        return ResponseEntity.ok(userDto);
    }

    @PostMapping
    public ResponseEntity<UserRequestDto> createUser(@Valid @RequestBody UserRequestDto userRequestDto){
        logger.info(" createUser {}", userRequestDto);
        UserRequestDto savedUser = userService.createUser(userRequestDto);
        return ResponseEntity.ok(savedUser);
    }

    @PutMapping("/{email}")
    public ResponseEntity<UserRequestDto> updateUserByEmail(@PathVariable String email, @RequestBody UserRequestDto userRequestDto){
        logger.info(" updateUser {}",userRequestDto);
        UserRequestDto updatedUser = userService.updateUser(email, userRequestDto);
        return ResponseEntity.ok(updatedUser);
    }


    @PostMapping("/validateToken")
    public ResponseEntity<ErrorResponse> validateToken(@RequestBody TokenRequest tokenRequest) {
        logger.info(" validateToken {}", tokenRequest);
        userService.validateToken(tokenRequest);
        return ResponseEntity.ok().body(new ErrorResponse(HttpStatus.OK.value(), "Token is valid", System.currentTimeMillis()));
    }

    @PostMapping("/login")
    public ResponseEntity<TokenResponse> loginUser(@RequestBody AuthRequest authRequest) {
        logger.info(" login {}", authRequest);
        return new ResponseEntity<>(userService.loginUser(authRequest), HttpStatus.OK);
    }

    @GetMapping("/reset/{email}")
    public ResponseEntity<ErrorResponse> sendEmail(@PathVariable String email){
        String message = emailService.sendEmail(email);
        return ResponseEntity.ok().body(new ErrorResponse(HttpStatus.OK.value(), message, System.currentTimeMillis()));
    }

    @GetMapping("/otp/{email}/{otp}")
    public ResponseEntity<Boolean> validateOtp(@PathVariable String email, @PathVariable String otp){
        return new ResponseEntity<>(userService.validateOtp(email, otp), HttpStatus.OK);
    }
}
