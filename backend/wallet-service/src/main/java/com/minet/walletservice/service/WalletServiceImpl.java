package com.minet.walletservice.service;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.entity.Wallet;
import com.minet.walletservice.exception.CustomPersistenceException;
import com.minet.walletservice.exception.WalletNotFoundException;
import com.minet.walletservice.repository.WalletRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WalletServiceImpl implements WalletService {

    private final WalletRepository walletRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public WalletServiceImpl(WalletRepository walletRepository, ModelMapper modelMapper) {
        this.walletRepository = walletRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public WalletDTO addWallet(WalletDTO walletDTO) {
        try {
            Wallet walletEntity = modelMapper.map(walletDTO, Wallet.class);
            Wallet savedWallet = walletRepository.save(walletEntity);
            return modelMapper.map(savedWallet, WalletDTO.class);
        } catch (CustomPersistenceException ex) {
            throw new CustomPersistenceException(ex.getMessage());
        }
    }

    @Override
    public WalletDTO getWalletByUserIdAndCoinId(int userId, int coinId) {
        Optional<Wallet> walletEntity = walletRepository.findByUserIdAndCoinId(userId, coinId);
        if (walletEntity.isPresent()) {
            return modelMapper.map(walletEntity.get(), WalletDTO.class);
        } else {
            throw new WalletNotFoundException("Wallet not found for userId: " + userId + " and coinId: " + coinId);}
    }


    @Override
    public WalletDTO updateOrSaveWallet(WalletDTO walletDTO) {
        int userId = walletDTO.getUserId();
        int coinId = walletDTO.getCoinId();

        Optional<Wallet> optionalWallet = walletRepository.findByUserIdAndCoinId(userId, coinId);
        if (optionalWallet.isPresent()) {
            Wallet existingWallet=optionalWallet.get();
            double prevBalance = existingWallet.getBalance();
            walletDTO.setBalance(walletDTO.getBalance() + prevBalance);
            walletDTO.setWalletId(existingWallet.getWalletId());

            Wallet updatedWallet = modelMapper.map(walletDTO, Wallet.class);
            walletRepository.save(updatedWallet);

            return walletDTO;
        } else {
            Wallet walletEntity = modelMapper.map(walletDTO, Wallet.class);
            Wallet savedWallet = walletRepository.save(walletEntity);
            return modelMapper.map(savedWallet, WalletDTO.class);
        }
    }
}
