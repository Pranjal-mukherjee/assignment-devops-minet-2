
package com.minet.userservice.dto;

import lombok.*;

@Getter
@Setter
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TokenResponse {
    private int userId;
    private String name;
    private String email;
    private double userBalance;
    private String token;
}
