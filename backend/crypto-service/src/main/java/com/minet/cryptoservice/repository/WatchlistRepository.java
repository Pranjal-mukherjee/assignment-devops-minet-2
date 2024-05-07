package com.minet.cryptoservice.repository;

import com.minet.cryptoservice.entity.Watchlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WatchlistRepository extends JpaRepository<Watchlist,Integer> {
    List<Watchlist> findByUserId(int id);
}