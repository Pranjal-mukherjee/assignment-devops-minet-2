package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.WatchlistDto;
import com.minet.cryptoservice.entity.Watchlist;

import java.util.List;

public interface WatchlistService {
    List<WatchlistDto> getByUserId(int  id);
    WatchlistDto saveWatchlist(Watchlist watchlist);
    String deleteWatchlist(int id);
}
