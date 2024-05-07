package com.minet.portfolioservice.exception;

public class CustomPersistenceException extends RuntimeException{
    public CustomPersistenceException(String message){
        super(message);
    }
}
