package com.minet.portfolioservice.service;

import com.minet.portfolioservice.config.TradeMapper;
import com.minet.portfolioservice.dto.TradeDTO;
import com.minet.portfolioservice.entity.Trade;
import com.minet.portfolioservice.enums.TradeStatus;
import com.minet.portfolioservice.enums.TransactionStatus;
import com.minet.portfolioservice.exception.CustomPersistenceException;
import com.minet.portfolioservice.exception.TradeFetchException;
import com.minet.portfolioservice.repository.TradeRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

 class TradeServiceImplementationTest {

    @Mock
    private TradeRepository tradeRepository;

    @InjectMocks
    private TradeServiceImplementation tradeService;

    @Mock
    private TradeMapper tradeMapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllTradeByUserId() {
        int userId = 1;

        List<Trade> trades = new ArrayList<>();
        LocalDateTime now = LocalDateTime.now();

        trades.add(new Trade(1, now, "Supplier1", TradeStatus.Purchased, 10.0, 1000.0, 1, 0.0, "Ethereum wallet", 500.0, 1500.0, "USD Wallet", 1, TransactionStatus.SUCCESS));

        List<TradeDTO> tradeDTOs = new ArrayList<>();
        tradeDTOs.add(new TradeDTO(1, now, "Supplier1", TradeStatus.Purchased, 10.0, 1000.0, 1, 0.0, "Ethereum wallet", 500.0, 1500.0, "USD Wallet", 1, TransactionStatus.SUCCESS));

        when(tradeRepository.getAllTradeByUserId(userId)).thenReturn(trades);
        when(tradeMapper.convertEntityToDTO(trades.get(0))).thenReturn(tradeDTOs.get(0));

        List<TradeDTO> result = tradeService.getAllTradeByUserId(userId);

        assertEquals(tradeDTOs, result);
    }

    @Test
    void testGetAllTradeByUserIdTradeNotFound() {
        int userId = 1;

        when(tradeRepository.getAllTradeByUserId(userId)).thenReturn(new ArrayList<>());

        Exception exception = assertThrows(TradeFetchException.class, () -> tradeService.getAllTradeByUserId(userId));
        assertEquals("An error occurred while fetching trades for user id: " + userId, exception.getMessage());
    }

    @Test
    void testGetAllTrades() {
        List<Trade> trades = new ArrayList<>();
        LocalDateTime now = LocalDateTime.now();

        trades.add(new Trade(1, now, "Supplier1", TradeStatus.Purchased, 10.0, 1000.0, 1, 0.0, "Ethereum wallet", 500.0, 1500.0, "USD Wallet", 1, TransactionStatus.SUCCESS));
        trades.add(new Trade(2, now, "Supplier2", TradeStatus.Sold, 15.0, 1500.0, 2, 0.0, "Bitcoin wallet", 750.0, 2250.0, "EUR Wallet", 2, TransactionStatus.SUCCESS));

        List<TradeDTO> tradeDTOs = new ArrayList<>();
        tradeDTOs.add(new TradeDTO(1, now, "Supplier1", TradeStatus.Purchased, 10.0, 1000.0, 1, 0.0, "Ethereum wallet", 500.0, 1500.0, "USD Wallet", 1, TransactionStatus.SUCCESS));
        tradeDTOs.add(new TradeDTO(2, now, "Supplier2", TradeStatus.Sold, 15.0, 1500.0, 2, 0.0, "Bitcoin wallet", 750.0, 2250.0, "EUR Wallet", 2, TransactionStatus.SUCCESS));

        when(tradeRepository.findAll()).thenReturn(trades);
        when(tradeMapper.convertEntityToDTO(trades.get(0))).thenReturn(tradeDTOs.get(0));
        when(tradeMapper.convertEntityToDTO(trades.get(1))).thenReturn(tradeDTOs.get(1));

        List<TradeDTO> result = tradeService.getAllTrades();

        assertEquals(tradeDTOs, result);
    }

    @Test
    void testSaveTrade() {
        LocalDateTime now = LocalDateTime.now();

        Trade trade = new Trade(1, now, "Supplier1", TradeStatus.Purchased,10.0, 1000.0, 1, 0.0, "Ethereum wallet", 500.0, 1500.0, "USD Wallet", 1, TransactionStatus.SUCCESS);
        TradeDTO tradeDTO = new TradeDTO(1, now, "Supplier1", TradeStatus.Purchased, 10.0, 1000.0, 1, 0.0, "Ethereum wallet", 500.0, 1500.0, "USD Wallet", 1, TransactionStatus.SUCCESS);

        when(tradeRepository.save(trade)).thenReturn(trade);
        when(tradeMapper.convertEntityToDTO(trade)).thenReturn(tradeDTO);

        TradeDTO result = tradeService.saveTrade(trade);

        assertEquals(tradeDTO, result);
    }



    @Test
    void testSaveTradeWithCustomPersistenceException() {
        LocalDateTime now = LocalDateTime.now();
        Trade trade = new Trade(1, now, "Supplier1", TradeStatus.Purchased, 10.0, 1000.0, 1, 0.0, "Ethereum wallet", 500.0, 1500.0, "USD Wallet", 1, TransactionStatus.SUCCESS);

        when(tradeRepository.save(trade)).thenThrow(new CustomPersistenceException("Simulated persistence exception"));

        CustomPersistenceException exception = assertThrows(CustomPersistenceException.class, () -> tradeService.saveTrade(trade));

        assertEquals("Simulated persistence exception", exception.getMessage());

    }

    @Test
    void testGetAllTradesWithRuntimeException() {
        // Arrange
        when(tradeRepository.findAll()).thenThrow(new RuntimeException("Simulated runtime exception"));

        // Act and Assert
       TradeFetchException exception = assertThrows(TradeFetchException.class, () -> tradeService.getAllTrades());
        assertEquals("An error occurred while fetching all trades", exception.getMessage());

    }
}
