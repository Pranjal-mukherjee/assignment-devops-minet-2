package com.minet.portfolioservice.exception;

public class TradeNotFoundException extends RuntimeException{
    public TradeNotFoundException(String message)
    {
        super(message);
    }
}
