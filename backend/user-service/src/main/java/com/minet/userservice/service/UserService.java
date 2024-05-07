package com.minet.userservice.service;

import com.minet.userservice.dto.*;
import com.minet.userservice.exception.ErrorResponse;


public interface UserService {
    UserResponseDto getUserByEmail(String email);

    UserRequestDto updateUser(String email, UserRequestDto userRequestDto);

    UserRequestDto createUser(UserRequestDto userRequestDto);

    void validateToken(TokenRequest tokenResponse);

    TokenResponse loginUser(AuthRequest authRequest);

    Boolean validateOtp(String email, String otp);
}
