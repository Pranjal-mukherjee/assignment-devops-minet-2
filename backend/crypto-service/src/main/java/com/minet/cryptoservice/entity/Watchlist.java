package com.minet.cryptoservice.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "watchlist")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Watchlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "user_id")
    private int userId;
    @Column(name = "coin_id")
    private int coinId;
}
