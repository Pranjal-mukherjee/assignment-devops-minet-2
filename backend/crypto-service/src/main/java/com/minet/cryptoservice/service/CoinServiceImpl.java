package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.CoinDto;
import com.minet.cryptoservice.entity.Coin;
import com.minet.cryptoservice.exception.EntityNotFoundException;
import com.minet.cryptoservice.exception.EntityPersistenceException;
import com.minet.cryptoservice.mapper.CoinServiceMapper;
import com.minet.cryptoservice.repository.CoinRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class CoinServiceImpl implements CoinService{

    private final CoinRepository coinRepository;
    private final CoinServiceMapper coinServiceMapper;

    @Autowired
    public CoinServiceImpl(CoinRepository coinRepository, CoinServiceMapper coinServiceMapper) {
        this.coinRepository = coinRepository;
        this.coinServiceMapper = coinServiceMapper;
    }
    @Override
    public List<CoinDto> getAllCoins() {
        try{
            List<Coin> coins = coinRepository.findAll();

            if (coins.isEmpty()) {
                throw new EntityPersistenceException("Error while fetching coins");
            }
           return coinServiceMapper.entityToDto(coins);
        }
        catch (EntityPersistenceException e){
            throw new EntityPersistenceException("Error while fetching coins");
        }
    }

    @Override
    public CoinDto getCoinById(int id) {
        try{
            Coin coin = coinRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Coin not found with id " + id));
            return coinServiceMapper.convertEntityToDto(coin);
        }catch (EntityNotFoundException e){
            throw new EntityNotFoundException(e.getMessage());
        }
    }

    @Override
    public CoinDto getCoinByName(String name) {
        try{
            Coin coin = coinRepository.findByName(name).orElseThrow(() -> new EntityNotFoundException("Coin not found with name " + name));
            return coinServiceMapper.convertEntityToDto(coin);
        }catch (EntityNotFoundException e){
            throw new EntityNotFoundException(e.getMessage());
        }
    }

}
