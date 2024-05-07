package com.minet.portfolioservice.service;

import com.minet.portfolioservice.config.TradeMapper;
import com.minet.portfolioservice.dto.TradeDTO;
import com.minet.portfolioservice.entity.Trade;
import com.minet.portfolioservice.exception.CustomPersistenceException;
import com.minet.portfolioservice.exception.TradeFetchException;
import com.minet.portfolioservice.exception.TradeNotFoundException;
import com.minet.portfolioservice.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TradeServiceImplementation implements TradeService {

    private TradeRepository tradeRepository;
    private TradeMapper tradeMapper;

    @Autowired
    public TradeServiceImplementation(TradeRepository tradeRepository, TradeMapper tradeMapper) {
        this.tradeRepository = tradeRepository;
        this.tradeMapper = tradeMapper;
    }

    @Override
    public List<TradeDTO> getAllTradeByUserId(int userId) {
        try {
            List<Trade> trades = tradeRepository.getAllTradeByUserId(userId);
            if (!trades.isEmpty()) {
                return trades.stream()
                        .map(tradeMapper::convertEntityToDTO)
                        .toList();
            } else {
                throw new TradeNotFoundException("Trade does not exist with id: " + userId);
            }
        } catch (Exception e) {
            throw new TradeFetchException("An error occurred while fetching trades for user id: " + userId, e);
        }
    }

    @Override
    public List<TradeDTO> getAllTrades() {
        try {
            List<Trade> trades = tradeRepository.findAll();
            return trades.stream()
                    .map(tradeMapper::convertEntityToDTO)
                    .toList();
        } catch (Exception e) {
            throw new TradeFetchException("An error occurred while fetching all trades", e);
        }
    }

    @Override
    public TradeDTO saveTrade(Trade trade) {
        try {
            Trade savedTrade = tradeRepository.save(trade);
            return tradeMapper.convertEntityToDTO(savedTrade);
        } catch (CustomPersistenceException ex) {
            throw new CustomPersistenceException(ex.getMessage());
        }
    }
}
