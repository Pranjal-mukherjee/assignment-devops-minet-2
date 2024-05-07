package com.minet.userservice.serviceimpl;

import com.minet.userservice.dto.*;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.UserAlreadyExistsException;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.mapper.UserMapper;
import com.minet.userservice.repository.UserRepository;
import com.minet.userservice.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final Logger logger;

    private final UserMapper userMapper;

    private final UserRepository userRepository;

    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;

    private final PasswordEncoder passwordEncoder;

    @Override
    public UserResponseDto getUserByEmail(String email) {
        logger.info(">>> Getting users by email : {}", userRepository.findByEmail(email));
        Optional<User> user = Optional.ofNullable(userRepository.findByEmail(email));
        if(user.isPresent()) {
            return userMapper.convertSecuredEntityToDto(user.get());
        }

        throw new UserNotFoundException("User not found for email "+email);
    }

    @Override
    public UserRequestDto updateUser(String email, UserRequestDto userRequestDto) {
        Optional<User> user = Optional.ofNullable(userRepository.findByEmail(email));
        if(user.isEmpty()){
            throw new UserNotFoundException("User not found for email "+email);
        }
        User existingUser = user.get();
        if(userRequestDto.getUserBalance() != 0.0) {
            existingUser.setUserBalance(userRequestDto.getUserBalance());
        }
        if(userRequestDto.getPassword() != null){
            existingUser.setPassword(passwordEncoder.encode(userRequestDto.getPassword()));
        }
        User updatedUser = userRepository.save(existingUser);
        return userMapper.convertEntityToDto(updatedUser);
    }

    @Override
    public UserRequestDto createUser(UserRequestDto userRequestDto) {
        if(userRepository.existsByEmail(userRequestDto.getEmail())){
            throw new UserAlreadyExistsException("user Already Exists with email : "+userRequestDto.getEmail());
        }
        User user = userMapper.convertDtoToEntity(userRequestDto);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);
        return userMapper.convertEntityToDto(savedUser);
    }

    @Override
    public void validateToken(TokenRequest tokenResponse) {
        jwtService.isTokenValid(tokenResponse.getToken());
    }

    @Override
    public TokenResponse loginUser(AuthRequest authRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authRequest.getEmail(),
                        authRequest.getPassword()
                )
        );
        User user=userRepository.findByEmail(authRequest.getEmail());
        String jwtToken=jwtService.generateToken(user);
        return new TokenResponse(user.getId(),user.getName(),user.getEmail(),user.getUserBalance(),jwtToken);

    }

    @Override
    public Boolean validateOtp(String email, String otp) {
        Optional<User> user = Optional.ofNullable(userRepository.findByEmail(email));
        if(user.isEmpty()){
            throw new UserNotFoundException("User not found for email "+email);
        }
        User existingUser = user.get();
        return existingUser.getOtp().equals(otp);
    }
}
