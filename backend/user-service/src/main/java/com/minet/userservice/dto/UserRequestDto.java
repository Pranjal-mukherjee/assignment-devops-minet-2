package com.minet.userservice.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import static com.minet.userservice.constants.Constant.PASSWORD_ERROR;
import static com.minet.userservice.constants.Constant.PASSWORD_REGEX;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Builder
public class UserRequestDto {

    private int id;


    @NotNull
    @Size(min = 2, message = "user name can not contain less than 2 letters")
    private String name;

    @NotNull
    private String email;

    @NotNull
    @Size(min = 8)
    @Pattern(regexp = PASSWORD_REGEX, message = PASSWORD_ERROR)
    private String password;

    @NotNull
    @Positive(message = "User Balance can not be negative")
    private double userBalance;

    private LocalDateTime createdAt;
}
