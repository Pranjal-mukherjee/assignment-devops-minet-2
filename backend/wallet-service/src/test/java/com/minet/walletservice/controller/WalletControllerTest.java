package com.minet.walletservice.controller;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.service.WalletService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class WalletControllerTest {

    @Mock
    private WalletService walletService;

    @InjectMocks
    private WalletController walletController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void addWallet() {
        WalletDTO inputWalletDTO = new WalletDTO();
        WalletDTO expectedWalletDTO = new WalletDTO();

        when(walletService.addWallet(inputWalletDTO)).thenReturn(expectedWalletDTO);

        ResponseEntity<WalletDTO> responseEntity = walletController.addWallet(inputWalletDTO);

        assertNotNull(responseEntity);
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(expectedWalletDTO, responseEntity.getBody());
    }

    @Test
    void getWalletByUserIdAndCoinId_WalletExists() {
        int userId = 1;
        int coinId = 2;
        WalletDTO expectedWalletDTO = new WalletDTO();

        when(walletService.getWalletByUserIdAndCoinId(userId, coinId)).thenReturn(expectedWalletDTO);

        ResponseEntity<WalletDTO> responseEntity = walletController.getWalletByUserIdAndCoinId(userId, coinId);

        assertNotNull(responseEntity);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(expectedWalletDTO, responseEntity.getBody());
    }

    @Test
    void getWalletByUserIdAndCoinId_WalletNotFound() {
        int userId = 1;
        int coinId = 2;

        when(walletService.getWalletByUserIdAndCoinId(userId, coinId)).thenReturn(null);

        ResponseEntity<WalletDTO> responseEntity = walletController.getWalletByUserIdAndCoinId(userId, coinId);

        assertNotNull(responseEntity);
        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
    }

    @Test
    void updateOrSaveWallet() {
        WalletDTO inputWalletDTO = new WalletDTO();
        WalletDTO expectedWalletDTO = new WalletDTO();

        when(walletService.updateOrSaveWallet(inputWalletDTO)).thenReturn(expectedWalletDTO);

        ResponseEntity<WalletDTO> responseEntity = walletController.updateOrSaveWallet(inputWalletDTO);


        assertNotNull(responseEntity);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(expectedWalletDTO, responseEntity.getBody());
    }
}
