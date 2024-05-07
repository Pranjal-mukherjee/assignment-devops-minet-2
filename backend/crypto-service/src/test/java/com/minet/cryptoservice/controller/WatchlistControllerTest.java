package com.minet.cryptoservice.controller;

import com.minet.cryptoservice.dto.WatchlistDto;
import com.minet.cryptoservice.entity.Watchlist;
import com.minet.cryptoservice.service.WatchlistService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class WatchlistControllerTest {

    @Mock
    private WatchlistService watchlistService;

    @InjectMocks
    private WatchlistController watchlistController;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(watchlistController).build();
    }

    @Test
    void getAllByUserId_ReturnWatchlists() {
        int userId = 1;
        WatchlistDto watchlistDto1 = new WatchlistDto(1,1,1);

        WatchlistDto watchlistDto2 = new WatchlistDto(1,1,2);

        List<WatchlistDto> watchlistDtos = Arrays.asList(watchlistDto1, watchlistDto2);

        when(watchlistService.getByUserId(userId)).thenReturn(watchlistDtos);

        ResponseEntity<List<WatchlistDto>> responseEntity = watchlistController.getAllByUserId(userId);

        verify(watchlistService, times(1)).getByUserId(userId);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(watchlistDtos, responseEntity.getBody());
    }

    @Test
    void saveWatchlist_ReturnSavedWatchlist() {
        Watchlist watchlist = new Watchlist();

        WatchlistDto savedWatchlistDto = new WatchlistDto(1,1,1);

        when(watchlistService.saveWatchlist(watchlist)).thenReturn(savedWatchlistDto);

        ResponseEntity<WatchlistDto> responseEntity = watchlistController.saveWatchlist(watchlist);

        verify(watchlistService, times(1)).saveWatchlist(watchlist);

        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(savedWatchlistDto, responseEntity.getBody());
    }

    @Test
    void deleteWatchlist_ReturnDeletedMessage() {
        int watchlistId = 1;
        String deletedMessage = "Watchlist with ID " + watchlistId + " deleted successfully";

        when(watchlistService.deleteWatchlist(watchlistId)).thenReturn(deletedMessage);

        ResponseEntity<String> responseEntity = watchlistController.deleteWatchlist(watchlistId);

        verify(watchlistService, times(1)).deleteWatchlist(watchlistId);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(deletedMessage, responseEntity.getBody());
    }
}
