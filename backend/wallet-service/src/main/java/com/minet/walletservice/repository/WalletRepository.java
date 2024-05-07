package com.minet.walletservice.repository;

import com.minet.walletservice.entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface WalletRepository extends JpaRepository<Wallet, Integer> {

    Optional<Wallet> findByUserIdAndCoinId(int userId, int coinId);
    boolean existsByUserIdAndCoinId(int userId, int coinId);
}
