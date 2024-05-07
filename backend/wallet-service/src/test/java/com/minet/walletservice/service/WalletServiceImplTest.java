package com.minet.walletservice.service;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.entity.Wallet;
import com.minet.walletservice.exception.CustomPersistenceException;
import com.minet.walletservice.exception.WalletNotFoundException;
import com.minet.walletservice.repository.WalletRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class WalletServiceImplTest {

    @Mock
    private WalletRepository walletRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private WalletServiceImpl walletService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void addWallet() {
        WalletDTO inputWalletDTO = new WalletDTO();
        Wallet walletEntity = new Wallet();

        when(modelMapper.map(inputWalletDTO, Wallet.class)).thenReturn(walletEntity);
        when(walletRepository.save(any(Wallet.class))).thenReturn(walletEntity);
        when(modelMapper.map(walletEntity, WalletDTO.class)).thenReturn(inputWalletDTO);

        WalletDTO result = walletService.addWallet(inputWalletDTO);

        assertNotNull(result);
    }

    @Test
    void addWalletWithCustomPersistenceException() {
        WalletDTO inputWalletDTO = new WalletDTO();

        when(modelMapper.map(inputWalletDTO, Wallet.class)).thenReturn(new Wallet());
        when(walletRepository.save(any(Wallet.class))).thenThrow(new CustomPersistenceException("Persistence exception"));

        assertThrows(CustomPersistenceException.class, () -> {
            walletService.addWallet(inputWalletDTO);
        });
    }

    @Test
    void getWalletByUserIdAndCoinId_WalletExists() {
        int userId = 1;
        int coinId = 2;
        WalletDTO expectedWalletDTO = new WalletDTO();
        Wallet walletEntity = new Wallet();

        when(walletRepository.findByUserIdAndCoinId(userId, coinId)).thenReturn(Optional.of(walletEntity));
        when(modelMapper.map(walletEntity, WalletDTO.class)).thenReturn(expectedWalletDTO);

        WalletDTO result = walletService.getWalletByUserIdAndCoinId(userId, coinId);

        assertNotNull(result);
    }

    @Test
    void getWalletByUserIdAndCoinId_WalletNotFound() {
        int userId = 1;
        int coinId = 2;

        when(walletRepository.findByUserIdAndCoinId(userId, coinId)).thenReturn(Optional.empty());

        assertThrows(WalletNotFoundException.class, () -> {
            walletService.getWalletByUserIdAndCoinId(userId, coinId);
        });
    }

    @Test
    void updateOrSaveWallet_WalletExists() {
        WalletDTO inputWalletDTO = new WalletDTO();
        inputWalletDTO.setUserId(1);
        inputWalletDTO.setCoinId(2);
        inputWalletDTO.setBalance(100);

        Wallet existingWallet = new Wallet();
        existingWallet.setWalletId(1);
        existingWallet.setBalance(50);

        when(walletRepository.existsByUserIdAndCoinId(1, 2)).thenReturn(true);
        when(walletRepository.findByUserIdAndCoinId(1, 2)).thenReturn(Optional.of(existingWallet));
        when(walletRepository.save(any(Wallet.class))).thenReturn(existingWallet);

        WalletDTO result = walletService.updateOrSaveWallet(inputWalletDTO);
        assertNotNull(result);
  }

    @Test
    void updateOrSaveWallet_WalletDoesNotExist() {
        WalletDTO inputWalletDTO = new WalletDTO();
        inputWalletDTO.setUserId(1);
        inputWalletDTO.setCoinId(2);
        inputWalletDTO.setBalance(100);

        when(walletRepository.existsByUserIdAndCoinId(1, 2)).thenReturn(false);
        when(walletRepository.save(any(Wallet.class))).thenReturn(new Wallet());

        WalletDTO result = walletService.updateOrSaveWallet(inputWalletDTO);

        assertNull(result);
    }

    @Test
    void getWalletByUserIdAndCoinId_WalletNotFound_ExceptionMessage() {
        int userId = 1;
        int coinId = 2;

        when(walletRepository.findByUserIdAndCoinId(userId, coinId)).thenReturn(Optional.empty());

        WalletNotFoundException exception = assertThrows(WalletNotFoundException.class, () -> {
            walletService.getWalletByUserIdAndCoinId(userId, coinId);
        });

        assertEquals("Wallet not found for userId: " + userId + " and coinId: " + coinId, exception.getMessage());
    }
}
