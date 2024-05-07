package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.CoinDto;
import com.minet.cryptoservice.entity.Coin;
import com.minet.cryptoservice.exception.EntityNotFoundException;
import com.minet.cryptoservice.exception.EntityPersistenceException;
import com.minet.cryptoservice.mapper.CoinServiceMapper;
import com.minet.cryptoservice.repository.CoinRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.junit.jupiter.api.BeforeEach;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import org.mockito.MockitoAnnotations;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class CoinServiceImplTest {

    @Mock
    private CoinRepository coinRepository;

    @Mock
    private CoinServiceMapper coinServiceMapper;

    @InjectMocks
    private CoinServiceImpl coinService;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllCoins_WhenCoinsExist_ReturnCoinDtoList() {
        List<Coin> coins = Collections.singletonList(new Coin(1, "BTC",100,100, "+1.6", "url_to_image", "BTC", "Bitcoin", 800.0, 100.0));
        List<CoinDto> coinDtos = Collections.singletonList(new CoinDto(1, "BTC",100,100, "+1.6", "url_to_image", "BTC", "Bitcoin", 800.0, 100.0));

        when(coinRepository.findAll()).thenReturn(coins);
        when(coinServiceMapper.entityToDto(coins)).thenReturn(coinDtos);

        List<CoinDto> result = coinService.getAllCoins();

        verify(coinRepository, times(1)).findAll();
        verify(coinServiceMapper, times(1)).entityToDto(coins);
        assertEquals(coinDtos, result);
    }

    @Test
    void getAllCoins_WhenNoCoinsExist_ThrowEntityPersistenceException() {
        when(coinRepository.findAll()).thenReturn(Collections.emptyList());

        assertThrows(EntityPersistenceException.class, () -> coinService.getAllCoins());

        verify(coinRepository, times(1)).findAll();
        verifyNoMoreInteractions(coinServiceMapper);
    }

    @Test
    void getCoinById_WhenValidId_ReturnCoinDto() {
        int coinId = 1;
        Coin coin = new Coin(1, "BTC",100,100, "+1.6", "url_to_image", "BTC", "Bitcoin", 800.0, 100.0);
        CoinDto coinDto = new CoinDto(1, "BTC",100,100, "+1.6", "url_to_image", "BTC", "Bitcoin", 800.0, 100.0);

        when(coinRepository.findById(coinId)).thenReturn(Optional.of(coin));
        when(coinServiceMapper.convertEntityToDto(coin)).thenReturn(coinDto);

        CoinDto result = coinService.getCoinById(coinId);

        verify(coinRepository, times(1)).findById(coinId);
        verify(coinServiceMapper, times(1)).convertEntityToDto(coin);
        assertEquals(coinDto, result);
    }

    @Test
    void getCoinByName_WhenValidName_ReturnCoinDto() {
        String coinName = "Bitcoin";
        Coin coin = new Coin(1, "BTC",100,100, "+1.6", "url_to_image", "BTC", "Bitcoin", 800.0, 100.0);
        CoinDto coinDto = new CoinDto(1, "BTC",100,100, "+1.6", "url_to_image", "BTC", "Bitcoin", 800.0, 100.0);

        when(coinRepository.findByName(coinName)).thenReturn(Optional.of(coin));
        when(coinServiceMapper.convertEntityToDto(coin)).thenReturn(coinDto);

        CoinDto result = coinService.getCoinByName(coinName);

        verify(coinRepository, times(1)).findByName(coinName);
        verify(coinServiceMapper, times(1)).convertEntityToDto(coin);
        assertEquals(coinDto, result);
    }

    @Test
    void givenInvalidCoinId_whenGetById_thenThrowEntityNotFoundException() {
        when(coinRepository.findById(100)).thenReturn(Optional.empty());

        EntityNotFoundException exception = assertThrows(EntityNotFoundException.class, () -> coinService.getCoinById(100));
        assertEquals("Coin not found with id 100", exception.getMessage());

        verify(coinRepository, times(1)).findById(100);
    }

    @Test
    void givenInvalidCoinName_whenGetByName_thenThrowEntityNotFoundException() {
        when(coinRepository.findByName("InvalidCoin")).thenReturn(Optional.empty());

        EntityNotFoundException exception = assertThrows(EntityNotFoundException.class, () -> coinService.getCoinByName("InvalidCoin"));
        assertEquals("Coin not found with name InvalidCoin", exception.getMessage());

        verify(coinRepository, times(1)).findByName("InvalidCoin");
    }
}

