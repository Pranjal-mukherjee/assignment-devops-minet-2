package com.minet.portfolioservice.controller;
import com.minet.portfolioservice.dto.TradeDTO;
import com.minet.portfolioservice.entity.Trade;
import com.minet.portfolioservice.enums.TradeStatus;
import com.minet.portfolioservice.enums.TransactionStatus;
import com.minet.portfolioservice.service.TradeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


 class TradeControllerTest {
    private MockMvc mockMvc;

    @Mock
    private TradeService tradeService;

    @InjectMocks
    private TradeController tradeController;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(tradeController).build();
    }

    @Test
    void testGetAllTrades() throws Exception {
        List<TradeDTO> tradeDTOList = new ArrayList<>();
        tradeDTOList.add(new TradeDTO(1, LocalDateTime.now(), "Supplier1", TradeStatus.Purchased, 10.0, 1000.0, 1, 0.0, "Ethereum wallet", 500.0, 1500.0, "USD Wallet", 1, TransactionStatus.SUCCESS));
        tradeDTOList.add(new TradeDTO(2, LocalDateTime.now(), "Supplier2", TradeStatus.Sold, 5.0, 500.0, 2, 0.0, "Bitcoin wallet", 250.0, 750.0, "BTC Wallet", 2, TransactionStatus.SUCCESS));


        when(tradeService.getAllTrades()).thenReturn(tradeDTOList);

        mockMvc.perform(MockMvcRequestBuilders.get("/trades"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(tradeDTOList.size()));
    }

    @Test
    void testGetAllTradesByUserId() throws Exception {
        int userId = 1;
        List<TradeDTO> tradeDTOList = new ArrayList<>();
        tradeDTOList.add(new TradeDTO(1, LocalDateTime.now(), "Supplier1", TradeStatus.Purchased, 10.0, 1000.0, 1, 0.0, "Ethereum wallet", 500.0, 1500.0, "USD Wallet", 1, TransactionStatus.SUCCESS));
        tradeDTOList.add(new TradeDTO(2, LocalDateTime.now(), "Supplier2", TradeStatus.Sold, 5.0, 500.0, 2, 0.0, "Bitcoin wallet", 250.0, 750.0, "BTC Wallet", 2, TransactionStatus.SUCCESS));


        when(tradeService.getAllTradeByUserId(userId)).thenReturn(tradeDTOList);

        mockMvc.perform(MockMvcRequestBuilders.get("/trades/{userId}", userId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(tradeDTOList.size()));
    }

    @Test
    void testSaveTrade() throws Exception {
        Trade newTrade = new Trade();
        LocalDateTime now = LocalDateTime.now();
        newTrade.setDate(now);
        newTrade.setSupplier("Supplier1");
        newTrade.setStatus(TradeStatus.Purchased);
        newTrade.setQuantity(10.0);
        newTrade.setValue(1000.0);
        newTrade.setCoinId(1);
        newTrade.setDeliveryFee(0.0);
        newTrade.setDepositedTo("Ethereum wallet");
        newTrade.setTransactionFee(500.0);
        newTrade.setTotalAmount(1500.0);
        newTrade.setPaymentMethod("USD Wallet");
        newTrade.setUserId(1);
        newTrade.setTransactionStatus(TransactionStatus.SUCCESS);

        TradeDTO expectedTradeDTO = new TradeDTO(2, now, "Supplier1", TradeStatus.Purchased, 10.0, 1000.0, 1, 0.0, "Ethereum wallet", 500.0, 1500.0, "USD Wallet", 2, TransactionStatus.SUCCESS);

        when(tradeService.saveTrade(newTrade)).thenReturn(expectedTradeDTO);

        // Call the controller method that saves the trade
        ResponseEntity<TradeDTO> responseEntity = tradeController.saveTrade(newTrade);

        // Verify that the HTTP status code is HttpStatus.CREATED (201)
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());

        // Verify that the expected TradeDTO is returned
        assertEquals(expectedTradeDTO, responseEntity.getBody());
    }


}
