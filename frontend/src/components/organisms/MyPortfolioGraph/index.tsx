import React, { useState } from 'react';
import { Grid, Stack } from '@mui/material';
import Graph from '../../molecules/Graph';
import TimeLineTabs from '../../molecules/Timeline';
import NoGraphAlt from '../../../../public/assets/images/NoGraphAlt.svg';
import Image from '../../atoms/Image';
import  DividerComponent  from '../../atoms/Divider';
import { theme } from '../../../theme';
import IconTypographyStack from '../../molecules/IconTypographyStack';
import DownwardArrow from '../../../../public/assets/icons/DownwardArrow.svg';
import UpwardArrow from '../../../../public/assets/icons/UpwardArrow.svg';
import { timeLineValues } from '../../../utils/constants';
import {
  CoinDescriptionContainer,
  ImageContainer,
  LowerParentGrid,
  MainContainer,
  TotalContainer,
  ValueContainer
} from './style';
import CryptoSelector from '../CryptoSelector';

export interface MyportfolioGraphProps {
  title: string;
  value?: string;
  changePercentage1: string;
  data: object[];
  newUser: boolean;
}

const MyportfolioGraph = (props: MyportfolioGraphProps) => {
  const [firstDataKey, setFirstDataKey] = useState('Bitcoin');
  const [title2, setTitle2] = useState('Bitcoin');
  const [changePercentage2, setChangePercentage2] = useState('+8.2%');

  const handleChange = (cryptoName: string) => {
    setFirstDataKey(cryptoName);
    setTitle2(cryptoName);
    if (cryptoName == 'Bitcoin') {
      setChangePercentage2('+8.2%');
    } else {
      setChangePercentage2('-3.8%');
    }
  };
  return (
    <Grid container direction={'column'} gap={theme.spacing(2)}>
      <TotalContainer>
        <MainContainer>
          <ValueContainer>
            <CoinDescriptionContainer>
              <IconTypographyStack
                dashboard={true}
                firstTextVariant="caption1"
                firstTextColor={theme.palette.textColor.highEmp}
                secondTextColor={theme.palette.textColor.medEmp}
                secondTextVariant="h6"
                changeIcon={props.changePercentage1.includes('-') ? DownwardArrow : UpwardArrow}
                firstText={props.title}
                secondText={props.value}
                changeData={props.changePercentage1}
                thirdTextColor={
                  props.changePercentage1.includes('-')
                    ? theme.palette.error[500]
                    : theme.palette.success[500]
                }
                thirdTextVariant="overline"
              />
              {props.newUser && (
                <>
                  <Stack width="2px">
                    <DividerComponent
                      height="54px"
                      color={theme.palette.gray[100]}
                      orientation="vertical"
                    />
                  </Stack>
                  <IconTypographyStack
                    dashboard={true}
                    firstTextVariant="caption1"
                    firstTextColor={theme.palette.textColor.highEmp}
                    secondTextColor={theme.palette.textColor.medEmp}
                    secondTextVariant="h6"
                    changeIcon={changePercentage2.includes('-') ? DownwardArrow : UpwardArrow}
                    firstText={title2}
                    secondText={firstDataKey === 'Bitcoin' ? '$ 12,400' : '$ 1,297.24'}
                    changeData={changePercentage2}
                    thirdTextColor={
                      changePercentage2.includes('-')
                        ? theme.palette.error[500]
                        : theme.palette.success[500]
                    }
                    thirdTextVariant="overline"
                  />
                </>
              )}
            </CoinDescriptionContainer>
            <TimeLineTabs value={3} typevariant="Dashboard" timeLineValues={timeLineValues} />
          </ValueContainer>
          {props.newUser ? (
            <Graph
              data={props.data}
              multiple={true}
              baseDataKey={'name'}
              firstDataKey={firstDataKey}
              secondDataKey={'TotalInvestment'}
              secondColor={theme.palette.primary[500]}
              firstColor={
                firstDataKey === 'Bitcoin' ? theme.palette.warning[300] : theme.palette.error[500]
              }
              height={300}
            />
          ) : (
            <ImageContainer>
              <Image
                src={NoGraphAlt}
                sx={{ width: '297px', height: '223px' }}
                alt={'Empty State'}
              />
            </ImageContainer>
          )}
        </MainContainer>
      </TotalContainer>
      {props.newUser && (
        <LowerParentGrid container>
          <CryptoSelector handleBitcoinClick={handleChange} handleEthereumClick={handleChange} />
        </LowerParentGrid>
      )}
    </Grid>
  );
};
export default MyportfolioGraph;
