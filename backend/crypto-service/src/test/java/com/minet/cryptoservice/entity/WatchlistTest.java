package com.minet.cryptoservice.entity;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
class WatchlistTest {

    @Test
    void givenEmptyConstructor_whenCreateWatchlist_thenWatchlistIsNotNull() {
        Watchlist watchlist = new Watchlist();
        assertNotNull(watchlist);
    }

    @Test
    void givenAllArgsConstructor_whenCreateWatchlistWithParameters_thenWatchlistFieldsAreSet() {
        Watchlist watchlist = new Watchlist(1, 1, 2);

        assertEquals(1, watchlist.getId());
        assertEquals(1, watchlist.getUserId());
        assertEquals(2, watchlist.getCoinId());
    }

    @Test
    void givenWatchlistId_whenSetId_thenIdIsSet() {
        Watchlist watchlist = new Watchlist();
        watchlist.setId(1);
        assertEquals(1, watchlist.getId());
    }

    @Test
    void givenWatchlistUserId_whenSetUserId_thenUserIdIsSet() {
        Watchlist watchlist = new Watchlist();
        watchlist.setUserId(1);
        assertEquals(1, watchlist.getUserId());
    }

    @Test
    void givenWatchlistCoinId_whenSetCoinId_thenCoinIdIsSet() {
        Watchlist watchlist = new Watchlist();
        watchlist.setCoinId(2);
        assertEquals(2, watchlist.getCoinId());
    }
}

