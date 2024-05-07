package com.minet.walletservice.service;

import com.minet.walletservice.dto.WalletDTO;

public interface WalletService {
    WalletDTO addWallet(WalletDTO walletDTO);
    WalletDTO getWalletByUserIdAndCoinId(int userId, int coinId);
    WalletDTO updateOrSaveWallet(WalletDTO walletDTO);
}

