package com.minet.cryptoservice.entity;


import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class CoinTest {
    @Test
    void givenEmptyConstructor_whenCreateCoin_thenCoinIsNotNull() {
        Coin coin = new Coin();
        assertNotNull(coin);
    }

    @Test
    void givenAllArgsConstructor_whenCreateCoinWithParameters_thenCoinFieldsAreSet() {
        Coin coin = new Coin(1, "Bitcoin", 50000, 1000000000, "+5.2%", "https://example.com/bitcoin",
                "BTC", "Bitcoin", 18754500.0, 100.0);

        assertEquals(1, coin.getId());
        assertEquals("Bitcoin", coin.getName());
        assertEquals(50000, coin.getPrice());
        assertEquals(1000000000, coin.getMarketCap());
        assertEquals("+5.2%", coin.getChangeData());
        assertEquals("https://example.com/bitcoin", coin.getSrc());
        assertEquals("BTC", coin.getSymbol());
        assertEquals("Bitcoin", coin.getDescription());
        assertEquals(18754500.0, coin.getCirculatingSupply());
        assertEquals(100.0, coin.getVolume());
    }

    @Test
    void givenCoinId_whenSetId_thenIdIsSet() {
        Coin coin = new Coin();
        coin.setId(1);
        assertEquals(1, coin.getId());
    }

    @Test
    void givenCoinName_whenSetName_thenNameIsSet() {
        Coin coin = new Coin();
        coin.setName("Ethereum");
        assertEquals("Ethereum", coin.getName());
    }

    @Test
    void givenCoinPrice_whenSetPrice_thenPriceIsSet() {
        Coin coin = new Coin();
        coin.setPrice(3000);
        assertEquals(3000, coin.getPrice());
    }

    @Test
    void givenCoinMarketCap_whenSetMarketCap_thenMarketCapIsSet() {
        Coin coin = new Coin();
        coin.setMarketCap(200000000);
        assertEquals(200000000, coin.getMarketCap());
    }

    @Test
    void givenCoinChangeData_whenSetChangeData_thenChangeDataIsSet() {
        Coin coin = new Coin();
        coin.setChangeData("+3.8%");
        assertEquals("+3.8%", coin.getChangeData());
    }

    @Test
    void givenCoinSrc_whenSetSrc_thenSrcIsSet() {
        Coin coin = new Coin();
        coin.setSrc("https://example.com/coin");
        assertEquals("https://example.com/coin", coin.getSrc());
    }

    @Test
    void givenCoinSymbol_whenSetSymbol_thenSymbolIsSet() {
        Coin coin = new Coin();
        coin.setSymbol("ETH");
        assertEquals("ETH", coin.getSymbol());
    }

    @Test
    void givenCoinDescription_whenSetDescription_thenDescriptionIsSet() {
        Coin coin = new Coin();
        coin.setDescription("A cryptocurrency");
        assertEquals("A cryptocurrency", coin.getDescription());
    }

    @Test
    void givenCoinCirculatingSupply_whenSetCirculatingSupply_thenCirculatingSupplyIsSet() {
        Coin coin = new Coin();
        coin.setCirculatingSupply(115000000.0);
        assertEquals(115000000.0, coin.getCirculatingSupply());
    }

    @Test
    void givenCoinVolume_whenSetVolume_thenVolumeIsSet() {
        Coin coin = new Coin();
        coin.setVolume(5000000.0);
        assertEquals(5000000.0, coin.getVolume());
    }
}
