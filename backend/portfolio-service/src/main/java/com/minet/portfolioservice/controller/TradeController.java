package com.minet.portfolioservice.controller;

import com.minet.portfolioservice.dto.TradeDTO;
import com.minet.portfolioservice.entity.Trade;
import com.minet.portfolioservice.service.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trades")
public class TradeController {


    private TradeService tradeService;
    @Autowired
    public TradeController(TradeService tradeService){
        this.tradeService=tradeService;
    }


    @GetMapping
    public ResponseEntity<List<TradeDTO>> getAllTrades() {
        List<TradeDTO> trades = tradeService.getAllTrades();
        return new ResponseEntity<>(trades, HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<TradeDTO>> getAllTradesByUserId(@PathVariable int userId) {
        List<TradeDTO> trades = tradeService.getAllTradeByUserId(userId);
        return new ResponseEntity<>(trades, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TradeDTO> saveTrade(@RequestBody Trade trade) {
        TradeDTO savedTrade = tradeService.saveTrade(trade);
        return new ResponseEntity<>(savedTrade, HttpStatus.CREATED);
    }



}
