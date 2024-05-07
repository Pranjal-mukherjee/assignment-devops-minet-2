package com.minet.cryptoservice.controller;

import com.minet.cryptoservice.dto.CoinDto;
import com.minet.cryptoservice.service.CoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cryptos")
public class CoinController {
    private final CoinService coinService;

    @Autowired
    public CoinController(CoinService coinService) {
        this.coinService = coinService;
    }
    @GetMapping
    public ResponseEntity<List<CoinDto>> getAllCoins(){
        return new ResponseEntity<>(coinService.getAllCoins(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CoinDto> getCoinById(@PathVariable int id){
        return new ResponseEntity<>(coinService.getCoinById(id),HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<CoinDto> getCoinByName(@PathVariable String name){
        return new ResponseEntity<>(coinService.getCoinByName(name),HttpStatus.OK);
    }
}
