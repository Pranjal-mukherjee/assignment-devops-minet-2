package com.minet.walletservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WalletDTO {
    private int walletId;
    private double balance;
    private int userId;
    private int tradeId;
    private int coinId;
}