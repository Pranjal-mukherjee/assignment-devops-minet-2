import React, { useEffect, useState } from 'react';
import { Grid, IconButton, InputAdornment } from '@mui/material';
import switch1 from '../../../../public/assets/icons/switch.svg';
import TypographyComponent from '../../atoms/Typography';
import { theme } from '../../../theme';
import IconWithLabel from '../../molecules/IconWithLabel';
import  DropDown  from '../../atoms/Dropdown';
import InputFieldComponent from '../../atoms/InputField';
import { sxSearchbox } from '../../../utils/styledComponents';
import IconComponent from '../../atoms/Icon';
import Search from '../../../../public/assets/icons/SearchIcon.svg';
import Clear from '../../../../public/assets/icons/ClearIcon.svg';
import {
  HeaderContainer,
  RightContainer,
  SearchBoxContainer,
  StyledBox,
  StyledMainBox,
  StyledStack,
  StyledTab,
  StyledTabs
} from './style';
import {
  ALL_ASSETS_TEXT,
  CHANGE,
  MARKET_CAP_ALT,
  NAME,
  PRICE,
  SEARCH_ALL_ASSETS,
  TradeTableDropdowns,
  WATCH,
  WATCHLIST_TEXT
} from '../../../utils/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetAllCryptoCoins, GetWatchLists, getCryptoCoins } from '../../../services';
import { handleWatchlist } from '../../../utils/functions';
import TradeTableContent from './TradeTableContent';

export interface OriginalData {
  id: number;
  symbol: string;
  name: string;
  src: string;
  price: number;
  marketCap: number;
  volume: number;
  changeData: string;
  circulatingSupply: number;
  description: string;
}

const TradeTable = () => {
  const { state } = useLocation();

  const navigate = useNavigate();
  const [navValue, setNavValue] = useState<string>(state ?? 'AllAssets');
  const [transactions, setTransactions] = useState<OriginalData[]>([]);
  const [watchlistData, setWatchlistData] = useState<any>([]);
  const [inputValue, setInputValue] = React.useState('');
  const [watchlistCryptoData, setWatchlistCryptoData] = useState<OriginalData[]>([]);
  const [originalTransactions, setOriginalTransactions] = useState<OriginalData[]>([]);
  const [originalWatchlistCryptoData, setOriginalWatchlistCryptoData] = useState<OriginalData[]>(
    []
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  const isWatchlisted = (cryptoId: number) => {
    return watchlistCryptoData.some((item: any) => item?.id === cryptoId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetAllCryptoCoins();
        setTransactions(data);
        setOriginalTransactions(data);

        const selectedData = await GetWatchLists();
        const cryptoDataPromises = selectedData?.map(async (item: any) => {
          const cryptoCoinData = await getCryptoCoins(item.coinId);
          return cryptoCoinData;
        });

        const cryptoData = await Promise.all(cryptoDataPromises);
        setWatchlistCryptoData(cryptoData);
        setOriginalWatchlistCryptoData(cryptoData);
      } catch (error) {}
    };

    fetchData();
  }, [watchlistData]);

  const postOrDeleteWatchlist = async (cryptoId: number) => {
    try {
      await handleWatchlist(cryptoId, setWatchlistData);
    } catch (error) {}
  };

  useEffect(() => {
    GetWatchLists()
      .then((response) => {
        const watchlistPromises = response.map(async (watchlist: any) => {
          const crypto = await getCryptoCoins(watchlist.coinId);
          return crypto.data;
        });
        Promise.all(watchlistPromises).then((resolvedWatchlists) => {
          setWatchlistCryptoData(resolvedWatchlists);
        });
      })
      .catch((error: any) => {});
  }, [watchlistData]);

  useEffect(() => {
    if (inputValue.length === 0) {
      setTransactions(originalTransactions);
      setWatchlistCryptoData(originalWatchlistCryptoData);
      return;
    }

    const searchResults = originalTransactions.filter((transaction) => {
      const lowerCaseMainString = transaction.name.toLowerCase();
      const lowerCaseSubString = inputValue.toLowerCase();
      return lowerCaseMainString.includes(lowerCaseSubString);
    });
    const watchlistSearchResults = originalWatchlistCryptoData?.filter((transaction) => {
      const lowerCaseMainString = transaction.name.toLowerCase();
      const lowerCaseSubString = inputValue.toLowerCase();
      return lowerCaseMainString.includes(lowerCaseSubString);
    });
    setTransactions(searchResults);
    setWatchlistCryptoData(watchlistSearchResults);
  }, [inputValue, originalTransactions, originalWatchlistCryptoData]);

  const handleCardOnClick = (coinName: string) => {
    if (coinName === 'Bitcoin' || coinName === 'Ethereum') {
      navigate(`/details/${coinName.toLocaleLowerCase()}`, { state: coinName.toLocaleLowerCase() });
    }
  };

  const TableHeader = (
    <StyledBox>
      <TypographyComponent
        children={NAME}
        width={'24.2%'}
        variant="caption1"
        color={theme.palette.gray[500]}
      />
      <TypographyComponent
        width={'27.2%'}
        variant="caption1"
        color={theme.palette.gray[500]}
        children={PRICE}
      />
      <TypographyComponent
        width={'19.3%'}
        variant="caption1"
        color={theme.palette.gray[500]}
        children={CHANGE}
      />
      <Grid width={'19.3%'}>
        <IconWithLabel
          text={MARKET_CAP_ALT}
          iconSrc={switch1}
          color={theme.palette.gray[500]}
          variant={'caption1'}
          start={false}
          iconAlt={'market-cap'}
        />
      </Grid>
      <TypographyComponent
        width={'6.2%'}
        variant="caption1"
        color={theme.palette.gray[500]}
        children={WATCH}
      />
    </StyledBox>
  );

  return (
    <StyledMainBox>
      <StyledBox>
        <StyledStack direction={'column'}>
          <HeaderContainer data-testid="Trade-Table">
            <StyledTabs
              value={navValue}
              onChange={(event: React.SyntheticEvent, newValue: string) => {
                setNavValue(newValue);
              }}>
              <StyledTab
                value="AllAssets"
                label={<TypographyComponent variant="subtitle2" children={ALL_ASSETS_TEXT} />}
              />
              <StyledTab
                value="Watchlist"
                label={<TypographyComponent variant="subtitle2" children={WATCHLIST_TEXT} />}
              />
            </StyledTabs>
            <RightContainer>
              <SearchBoxContainer>
                <InputFieldComponent
                  name="search"
                  variant="outlined"
                  placeholder={SEARCH_ALL_ASSETS}
                  type="text"
                  value={inputValue}
                  handleChange={handleChange}
                  sx={sxSearchbox}
                  endAdornment={
                    <InputAdornment position="end">
                      {inputValue ? (
                        <IconButton
                          aria-label="clear input"
                          onClick={handleClearInput}
                          edge="end"
                          data-testid="Clear-Icon">
                          <IconComponent src={Clear} />
                        </IconButton>
                      ) : (
                        <IconComponent src={Search} />
                      )}
                    </InputAdornment>
                  }
                />
              </SearchBoxContainer>
              <DropDown
                variant="body1"
                menuList={TradeTableDropdowns.dropdown1}
                width={'5.813rem'}
                fontColor={theme.palette.gray[500]}
              />
              <DropDown
                variant="body1"
                menuList={TradeTableDropdowns.dropdown2}
                width={'7.625rem'}
                fontColor={theme.palette.gray[500]}
              />
            </RightContainer>
          </HeaderContainer>
          <TradeTableContent
            navValue={navValue}
            TableHeader={TableHeader}
            transactions={transactions}
            watchlistCryptoData={watchlistCryptoData}
            handleCardOnClick={handleCardOnClick}
            isWatchlisted={isWatchlisted}
            postOrDeleteWatchlist={postOrDeleteWatchlist}
          />
        </StyledStack>
      </StyledBox>
    </StyledMainBox>
  );
};

export default React.memo(TradeTable);
