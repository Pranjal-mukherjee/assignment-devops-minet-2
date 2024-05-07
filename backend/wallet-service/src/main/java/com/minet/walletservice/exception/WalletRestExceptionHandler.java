package com.minet.walletservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class WalletRestExceptionHandler{
        @ExceptionHandler
        public ResponseEntity<WalletErrorResponse> handleException(WalletNotFoundException exc)
        {
            WalletErrorResponse error=new WalletErrorResponse(
                    HttpStatus.NOT_FOUND.value(),exc.getMessage(),System.currentTimeMillis());

            return new ResponseEntity<>(error,HttpStatus.NOT_FOUND);
        }
        @ExceptionHandler
        public ResponseEntity<WalletErrorResponse> handleException(Exception exc)
        {
            WalletErrorResponse error=new WalletErrorResponse(
                    HttpStatus.BAD_REQUEST.value(),exc.getMessage(),System.currentTimeMillis());

            return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
        }

        @ExceptionHandler(CustomPersistenceException.class)
        public ResponseEntity<WalletErrorResponse> handlePersistenceException(CustomPersistenceException ex) {
            WalletErrorResponse errorResponse = new WalletErrorResponse(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(), ex.getMessage(), System.currentTimeMillis());

            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
}
