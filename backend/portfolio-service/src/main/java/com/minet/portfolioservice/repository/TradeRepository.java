package com.minet.portfolioservice.repository;

import com.minet.portfolioservice.entity.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeRepository extends JpaRepository<Trade,Integer> {
    List<Trade> getAllTradeByUserId(int userId);

}
