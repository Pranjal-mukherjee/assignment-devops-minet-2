package com.minet.cryptoservice.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "crypto_coin")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Coin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private int price;
    @Column(name = "market_cap")
    private int marketCap;
    @Column(name = "change_data")
    private String changeData;
    @Column(name = "src")
    private String src;
    @Column(name = "symbol")
    private String symbol;
    @Column(name = "description")
    private String description;
    @Column(name = "circulating_supply")
    private double circulatingSupply;
    @Column(name = "volume")
    private double volume;
}
