package com.minet.portfolioservice.exception;

import lombok.Data;

@Data
public class TradeErrorResponse {
    private int status;
    private String message;
    private long timeStamp;

    public TradeErrorResponse(int status, String message, long timeStamp) {
        this.status = status;
        this.message = message;
        this.timeStamp = timeStamp;
    }
    public TradeErrorResponse()
    {

    }

}
