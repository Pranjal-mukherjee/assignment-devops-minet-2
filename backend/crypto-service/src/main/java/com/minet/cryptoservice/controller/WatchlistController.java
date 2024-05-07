package com.minet.cryptoservice.controller;

import com.minet.cryptoservice.dto.WatchlistDto;
import com.minet.cryptoservice.entity.Watchlist;
import com.minet.cryptoservice.service.WatchlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cryptos/watchlist")
public class WatchlistController {

    private final WatchlistService watchlistService;

    @Autowired
    public WatchlistController(WatchlistService watchlistService) {
        this.watchlistService = watchlistService;
    }


    @GetMapping("/{userId}")
    public ResponseEntity<List<WatchlistDto>> getAllByUserId(@PathVariable int userId){
        return new ResponseEntity<>(watchlistService.getByUserId(userId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<WatchlistDto> saveWatchlist(@RequestBody Watchlist watchlist){
        return new ResponseEntity<>(watchlistService.saveWatchlist(watchlist), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteWatchlist(@PathVariable int id){
        return new ResponseEntity<>(watchlistService.deleteWatchlist(id), HttpStatus.OK);
    }
}