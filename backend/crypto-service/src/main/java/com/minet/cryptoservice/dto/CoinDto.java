package com.minet.cryptoservice.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CoinDto {
    private int id;
    private String name;
    private int price;
    private int marketCap;
    private String changeData;
    private String src;
    private String symbol;
    private String description;
    private double circulatingSupply;
    private double volume;
}
