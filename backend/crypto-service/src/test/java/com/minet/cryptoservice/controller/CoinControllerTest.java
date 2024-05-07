package com.minet.cryptoservice.controller;

import com.minet.cryptoservice.dto.CoinDto;
import com.minet.cryptoservice.exception.EntityNotFoundException;
import com.minet.cryptoservice.service.CoinService;
import jakarta.ws.rs.core.MediaType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class CoinControllerTest {

    @Mock
    private CoinService coinService;

    @InjectMocks
    private CoinController coinController;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(coinController).build();
    }

    @Test
    void givenCoinService_whenGetAllCoins_thenReturnsListOfCoins() throws Exception {
        List<CoinDto> mockCoins = Arrays.asList(
                new CoinDto(1, "BTC",100,100, "+1.6", "url_to_image", "BTC", "Bitcoin", 800.0, 100.0),
                new CoinDto(2, "ETH",100, 100, "+1.6", "url_to_image", "ETH", "Ethereum", 700.0, 100.0));
        when(coinService.getAllCoins()).thenReturn(mockCoins);

        mockMvc.perform(get("/api/v1/cryptos"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }

    @Test
    void givenCoinService_whenGetCoinById_thenReturnsCoin() throws Exception {
        CoinDto mockCoin = new CoinDto(1, "BTC",100,100, "+1.6", "url_to_image", "BTC", "Bitcoin", 800.0, 100.0);
        when(coinService.getCoinById(1)).thenReturn(mockCoin);

        mockMvc.perform(get("/api/v1/cryptos/1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    void givenCoinService_whenGetCoinByName_thenReturnsCoin() throws Exception {
        CoinDto mockCoin = new CoinDto(1, "BTC",100,100, "+1.6", "url_to_image", "BTC", "Bitcoin", 800.0, 100.0);
        when(coinService.getCoinByName("Bitcoin")).thenReturn(mockCoin);

        mockMvc.perform(get("/api/v1/cryptos/name/Bitcoin"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

}
