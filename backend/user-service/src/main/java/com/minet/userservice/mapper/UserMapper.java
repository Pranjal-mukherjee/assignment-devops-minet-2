package com.minet.userservice.mapper;

import com.minet.userservice.dto.UserRequestDto;
import com.minet.userservice.dto.UserResponseDto;
import com.minet.userservice.entity.User;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Slf4j
public class UserMapper {

    private final ModelMapper modelMapper;

    public UserMapper(){
        this.modelMapper = new ModelMapper();
    }

    public User convertDtoToEntity(UserRequestDto userRequest){
        log.info(">>> UserMapper : Converting dto to entity ", userRequest);
        User user = modelMapper.map(userRequest,User.class);
        user.setCreatedAt(LocalDateTime.now());
        return user;
    }

    public UserRequestDto convertEntityToDto(User user){
        log.info(">>> UserMapper : Converting entity to dto ", user.toString());
        return modelMapper.map(user, UserRequestDto.class);
    }

    public UserResponseDto convertSecuredEntityToDto(User user){
        log.info(">>> UserMapper : Converting secured entity to dto ", user.toString());
        return modelMapper.map(user, UserResponseDto.class);
    }


}
