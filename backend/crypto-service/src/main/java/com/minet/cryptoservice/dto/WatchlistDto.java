package com.minet.cryptoservice.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WatchlistDto {
    private int id;
    private int userId;
    private int coinId;
}