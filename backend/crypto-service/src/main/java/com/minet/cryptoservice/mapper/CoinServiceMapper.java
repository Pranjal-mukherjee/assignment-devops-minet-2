package com.minet.cryptoservice.mapper;

import com.minet.cryptoservice.dto.CoinDto;
import com.minet.cryptoservice.entity.Coin;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CoinServiceMapper  {
    private final ModelMapper modelMapper;
    @Autowired
    public CoinServiceMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }
    public Coin convertDtoToEntity(CoinDto coinDto){
        return modelMapper.map(coinDto, Coin.class);
    }
    public CoinDto convertEntityToDto(Coin coin){
        return modelMapper.map(coin, CoinDto.class);
    }

    public List<CoinDto> entityToDto(List<Coin> coins){
        return coins.stream().map(coin -> modelMapper.map(coin,CoinDto.class)).collect(Collectors.toList());
    }

}