package com.minet.portfolioservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class TradeRestExceptionHandler {
    @ExceptionHandler
    public ResponseEntity<TradeErrorResponse> handleException(TradeNotFoundException exc)
    {
        TradeErrorResponse error=new TradeErrorResponse(
                HttpStatus.NOT_FOUND.value(),exc.getMessage(),System.currentTimeMillis());

        return new ResponseEntity<>(error,HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler
    public ResponseEntity<TradeErrorResponse> handleException(Exception exc)
    {
        TradeErrorResponse error=new TradeErrorResponse(
                HttpStatus.BAD_REQUEST.value(),exc.getMessage(),System.currentTimeMillis());

        return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(CustomPersistenceException.class)
    public ResponseEntity<TradeErrorResponse> handlePersistenceException(CustomPersistenceException ex){
        TradeErrorResponse errorResponse=new TradeErrorResponse();
        errorResponse.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        errorResponse.setMessage(ex.getMessage());
        errorResponse.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(errorResponse,HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
