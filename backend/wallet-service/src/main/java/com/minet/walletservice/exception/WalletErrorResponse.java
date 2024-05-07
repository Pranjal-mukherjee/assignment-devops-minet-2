package com.minet.walletservice.exception;

import lombok.Data;

@Data
public class WalletErrorResponse {
    private int status;
    private String message;
    private long timeStamp;

    public WalletErrorResponse(int status, String message, long timeStamp) {
        this.status = status;
        this.message = message;
        this.timeStamp = timeStamp;
    }
}
