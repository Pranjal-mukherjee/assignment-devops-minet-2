package com.minet.portfolioservice.service;

import com.minet.portfolioservice.dto.TradeDTO;
import com.minet.portfolioservice.entity.Trade;
import java.util.List;


public interface TradeService {
    List<TradeDTO> getAllTradeByUserId(int userId);
    List<TradeDTO> getAllTrades();

    TradeDTO saveTrade(Trade trade);



}
