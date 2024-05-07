package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.WatchlistDto;
import com.minet.cryptoservice.entity.Watchlist;
import com.minet.cryptoservice.exception.EntityNotFoundException;
import com.minet.cryptoservice.exception.EntityPersistenceException;
import com.minet.cryptoservice.mapper.WatchlistServiceMapper;
import com.minet.cryptoservice.repository.WatchlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WatchlistServiceImpl implements WatchlistService{
    private final WatchlistRepository watchlistRepository;
    private final WatchlistServiceMapper watchlistServiceMapper;

    @Autowired
    public WatchlistServiceImpl(WatchlistRepository watchlistRepository, WatchlistServiceMapper watchlistServiceMapper) {
        this.watchlistRepository = watchlistRepository;
        this.watchlistServiceMapper = watchlistServiceMapper;
    }

    @Override
    public List<WatchlistDto> getByUserId(int id) {
        try {
            List<Watchlist> watchlists = watchlistRepository.findByUserId(id);
            if (watchlists.isEmpty()) {
                throw new EntityNotFoundException("Unable to find the watchlist with user_id: " + id);
            }
            return watchlistServiceMapper.entityToDto(watchlists);
        }catch (EntityNotFoundException e){
            throw new EntityNotFoundException("unable to find the watchlist with user_id: "+ id);
        }
    }

    @Override
    public WatchlistDto saveWatchlist(Watchlist watchlist) {
        try{
            Watchlist watchlistEntity = watchlistRepository.save(watchlist);
            return watchlistServiceMapper.convertEntityToDto(watchlistEntity);
        }catch (EntityPersistenceException e){
            throw new EntityPersistenceException(e.getMessage());
        }
    }

    @Override
    public String deleteWatchlist(int id) {
        try{
            Optional<Watchlist> watchlist = watchlistRepository.findById(id);
            if(watchlist.isEmpty())
            {
                throw new EntityNotFoundException("unable to find the watchlist with id: "+ id);
            }
            watchlistRepository.deleteById(id);
            return "deleted the watchlist with id: "+ id;
        }catch (EntityNotFoundException e){
            throw new EntityNotFoundException("unable to find the watchlist with id: "+ id);
        }
    }

}

