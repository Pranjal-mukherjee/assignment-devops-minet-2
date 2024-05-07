package com.minet.cryptoservice.repository;

import com.minet.cryptoservice.entity.Coin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CoinRepository extends JpaRepository<Coin, Integer> {
    Optional<Coin> findByName(String name);
}
