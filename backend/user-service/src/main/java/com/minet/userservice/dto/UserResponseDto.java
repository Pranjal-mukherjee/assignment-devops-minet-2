package com.minet.userservice.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDto {

    private int id;

    @NotNull
    @Size(min = 2, message = "user name can not contain less than 2 letters")
    private String name;

    @NotNull
    private String email;

    @NotNull
    @Positive(message = "User Balance can not be negative")
    private double userBalance;

    private LocalDateTime createdAt;

}
