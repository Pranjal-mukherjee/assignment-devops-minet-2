package com.minet.walletservice.exception;


public class CustomPersistenceException extends RuntimeException{
    public CustomPersistenceException(String message){
        super(message);
    }
}
