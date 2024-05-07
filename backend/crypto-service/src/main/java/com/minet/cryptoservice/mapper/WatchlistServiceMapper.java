package com.minet.cryptoservice.mapper;

import com.minet.cryptoservice.dto.WatchlistDto;
import com.minet.cryptoservice.entity.Watchlist;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class  WatchlistServiceMapper  {
    private final ModelMapper modelMapper;
    @Autowired
    public WatchlistServiceMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }
    public Watchlist convertDtoToEntity(WatchlistDto watchlistDto){
        return modelMapper.map(watchlistDto, Watchlist.class);
    }
    public WatchlistDto convertEntityToDto(Watchlist watchlist){
        return modelMapper.map(watchlist, WatchlistDto.class);
    }

    public List<WatchlistDto> entityToDto(List<Watchlist> watchlists){
        return watchlists.stream().map(watchlist -> modelMapper.map(watchlist,WatchlistDto.class)).collect(Collectors.toList());
    }
}