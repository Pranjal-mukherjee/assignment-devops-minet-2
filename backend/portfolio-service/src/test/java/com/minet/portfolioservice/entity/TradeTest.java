package com.minet.portfolioservice.entity;

import com.minet.portfolioservice.enums.TradeStatus;
import com.minet.portfolioservice.enums.TransactionStatus;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

 class TradeTest {
    private Trade trade;

    @BeforeEach
    void setUp() {
        trade = new Trade();
    }

    @Test
    void testAllArgsConstructor() {
        LocalDateTime date = LocalDateTime.now();
        Trade trade = new Trade(1, date, "SupplierABC", TradeStatus.Purchased, 10.0, 100.0, 1, 5.0, "BankA",
                2.0, 105.0, "Credit Card", 3, TransactionStatus.SUCCESS);

        assertEquals(1, trade.getId());
        assertEquals(date, trade.getDate());
        assertEquals("SupplierABC", trade.getSupplier());
        assertEquals(TradeStatus.Purchased, trade.getStatus());
        assertEquals(10.0, trade.getQuantity());
        assertEquals(100.0, trade.getValue());
        assertEquals(1, trade.getCoinId());
        assertEquals(5.0, trade.getDeliveryFee());
        assertEquals("BankA", trade.getDepositedTo());
        assertEquals(2.0, trade.getTransactionFee());
        assertEquals(105.0, trade.getTotalAmount());
        assertEquals("Credit Card", trade.getPaymentMethod());
        assertEquals(3, trade.getUserId());
        assertEquals(TransactionStatus.SUCCESS, trade.getTransactionStatus());
    }

    @Test
    void testTrade() {
        assertNotNull(trade);
    }

    @Test
    void testId() {
        trade.setId(1);
        assertEquals(1, trade.getId());
    }

    @Test
    void testDate() {
        LocalDateTime date = LocalDateTime.now();
        trade.setDate(date);
        assertEquals(date, trade.getDate());
    }

    @Test
    void testSupplier() {
        trade.setSupplier("SupplierABC");
        assertEquals("SupplierABC", trade.getSupplier());
    }

    @Test
    void testStatus() {
        trade.setStatus(TradeStatus.Sold);
        assertEquals(TradeStatus.Sold, trade.getStatus());
    }

    @Test
    void testQuantity() {
        trade.setQuantity(20.0);
        assertEquals(20.0, trade.getQuantity());
    }

    @Test
    void testValue() {
        trade.setValue(200.0);
        assertEquals(200.0, trade.getValue());
    }

    @Test
    void testCoinId() {
        trade.setCoinId(2);
        assertEquals(2, trade.getCoinId());
    }

    @Test
    void testDeliveryFee() {
        trade.setDeliveryFee(8.0);
        assertEquals(8.0, trade.getDeliveryFee());
    }

    @Test
    void testDepositedTo() {
        trade.setDepositedTo("BankB");
        assertEquals("BankB", trade.getDepositedTo());
    }

    @Test
    void testTransactionFee() {
        trade.setTransactionFee(3.0);
        assertEquals(3.0, trade.getTransactionFee());
    }

    @Test
    void testTotalAmount() {
        trade.setTotalAmount(108.0);
        assertEquals(108.0, trade.getTotalAmount());
    }

    @Test
    void testPaymentMethod() {
        trade.setPaymentMethod("PayPal");
        assertEquals("PayPal", trade.getPaymentMethod());
    }

    @Test
    void testUserId() {
        trade.setUserId(4);
        assertEquals(4, trade.getUserId());
    }

    @Test
    void testTransactionStatus() {
        trade.setTransactionStatus(TransactionStatus.PENDING);
        assertEquals(TransactionStatus.PENDING, trade.getTransactionStatus());
    }

    @Test
    void testDefaultConstructor() {
        Trade trade = new Trade();
        assertNotNull(trade);
        assertEquals(null, trade.getId());
    }
}
