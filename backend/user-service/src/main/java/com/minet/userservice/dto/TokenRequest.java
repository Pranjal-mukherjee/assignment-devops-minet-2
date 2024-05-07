
package com.minet.userservice.dto;

import lombok.*;

@Getter
@Setter
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TokenRequest {
    private String token;
}
