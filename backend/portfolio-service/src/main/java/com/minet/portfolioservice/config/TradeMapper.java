package com.minet.portfolioservice.config;

import com.minet.portfolioservice.dto.TradeDTO;
import com.minet.portfolioservice.entity.Trade;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class TradeMapper {
    private ModelMapper modelMapper;

    public TradeMapper(ModelMapper modelmapper)
    {
        this.modelMapper=modelmapper;
    }

    public TradeDTO convertEntityToDTO(Trade trade)
    {
        return modelMapper.map(trade,TradeDTO.class);
    }
    public Trade convertDTOToEntity(TradeDTO tradeDTO)
    {
        return modelMapper.map(tradeDTO,Trade.class);
    }
}
