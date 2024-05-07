package com.minet.walletservice.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "wallet")
public class Wallet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int walletId;

    @Column(name = "balance")
    private double balance;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "trade_id")
    private int tradeId;

    @Column(name = "coin_id")
    private int coinId;

}

