package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.WatchlistDto;
import com.minet.cryptoservice.entity.Watchlist;
import com.minet.cryptoservice.exception.EntityNotFoundException;
import com.minet.cryptoservice.mapper.WatchlistServiceMapper;
import com.minet.cryptoservice.repository.WatchlistRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WatchlistServiceImplTest {

    @Mock
    private WatchlistRepository watchlistRepository;

    @Mock
    private WatchlistServiceMapper watchlistServiceMapper;

    @InjectMocks
    private WatchlistServiceImpl watchlistService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getByUserId_WhenValidUserId_ReturnWatchlistDtoList() {
        int userId = 1;
        List<Watchlist> watchlists = Collections.singletonList(new Watchlist(1,1,1));
        List<WatchlistDto> watchlistDtos = Collections.singletonList(new WatchlistDto(1,1,1));

        when(watchlistRepository.findByUserId(userId)).thenReturn(watchlists);
        when(watchlistServiceMapper.entityToDto(watchlists)).thenReturn(watchlistDtos);

        List<WatchlistDto> result = watchlistService.getByUserId(userId);

        verify(watchlistRepository, times(1)).findByUserId(userId);
        verify(watchlistServiceMapper, times(1)).entityToDto(watchlists);
        assertEquals(watchlistDtos, result);
    }

    @Test
    void saveWatchlist_WhenValidWatchlist_ReturnWatchlistDto() {
        Watchlist watchlist = new Watchlist(1,1,1);
        Watchlist savedWatchlistEntity = new Watchlist(1,1,1);
        WatchlistDto savedWatchlistDto = new WatchlistDto(1,1,1);

        when(watchlistRepository.save(watchlist)).thenReturn(savedWatchlistEntity);
        when(watchlistServiceMapper.convertEntityToDto(savedWatchlistEntity)).thenReturn(savedWatchlistDto);

        WatchlistDto result = watchlistService.saveWatchlist(watchlist);

        verify(watchlistRepository, times(1)).save(watchlist);
        verify(watchlistServiceMapper, times(1)).convertEntityToDto(savedWatchlistEntity);
        assertEquals(savedWatchlistDto, result);
    }

    @Test
    void deleteWatchlist_WhenExistingId_ReturnSuccessMessage() {
        int watchlistId = 1;
        Watchlist watchlistEntity = new Watchlist(1,1,1);

        when(watchlistRepository.findById(watchlistId)).thenReturn(Optional.of(watchlistEntity));

        String result = watchlistService.deleteWatchlist(watchlistId);

        verify(watchlistRepository, times(1)).findById(watchlistId);
        verify(watchlistRepository, times(1)).deleteById(watchlistId);
        assertEquals("deleted the watchlist with id: " + watchlistId, result);
    }

    @Test
    void getByInvalidUserId_WhenInvalidUserId_ReturnEntityNotFoundException() {
        int invalidUserId = -1;

        when(watchlistRepository.findByUserId(invalidUserId)).thenReturn(Collections.emptyList());

        assertThrows(EntityNotFoundException.class, () -> watchlistService.getByUserId(invalidUserId));

        verify(watchlistRepository, times(1)).findByUserId(invalidUserId);
        verifyNoMoreInteractions(watchlistServiceMapper);
    }

    @Test
    void deleteByInvalidId_WhenInvalidId_ReturnEntityNotFoundException() {
        int invalidWatchlistId = -1;

        when(watchlistRepository.findById(invalidWatchlistId)).thenReturn(Optional.empty());

        assertThrows(EntityNotFoundException.class, () -> watchlistService.deleteWatchlist(invalidWatchlistId));

        verify(watchlistRepository, times(1)).findById(invalidWatchlistId);
        verifyNoMoreInteractions(watchlistRepository);
    }
}

