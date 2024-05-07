package com.minet.walletservice.entity;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class WalletTest {

    @Test
    void testNoArgsConstructor() {
        Wallet wallet = new Wallet();

        assertEquals(0, wallet.getWalletId());
        assertEquals(0, wallet.getUserId());
        assertEquals(0.0, wallet.getBalance());
        assertEquals(0, wallet.getCoinId());
        assertEquals(0, wallet.getTradeId());
    }

    @Test
    void testAllArgsConstructor() {
        Wallet wallet = new Wallet(1, 1500, 1, 1, 1);

        assertEquals(1, wallet.getWalletId());
        assertEquals(1, wallet.getUserId());
        assertEquals(1500, wallet.getBalance());
        assertEquals(1, wallet.getCoinId());
        assertEquals(1, wallet.getTradeId());
    }
    @Test
    void testSetters() {
        Wallet wallet = new Wallet();

        wallet.setWalletId(2);
        wallet.setUserId(2);
        wallet.setBalance(2000);
        wallet.setCoinId(2);
        wallet.setTradeId(2);

        assertEquals(2, wallet.getWalletId());
        assertEquals(2, wallet.getUserId());
        assertEquals(2000, wallet.getBalance());
        assertEquals(2, wallet.getCoinId());
        assertEquals(2, wallet.getTradeId());
    }
}
