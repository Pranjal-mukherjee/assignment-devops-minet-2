import { Stack, styled } from '@mui/material';
import { pxToRem, theme } from '../../../theme';
import { formattedAmount } from '../../../utils/functions';
import Graph from '../Graph';
import Chip from '../../atoms/Chip';
import ProfitIcon from '../../../../public/assets/images/profit.svg';
import LossIcon from '../../../../public/assets/images/loss.svg';
import IconComponent from '../../atoms/Icon';
import TypographyComponent from '../../atoms/Typography';
import { graph_data } from '../../../utils/constants';

export interface WatchListGraphProps {
  cryptoName: string;
  cryptoValue: number;
  cryptoIcon: string;
  data: object[];
  changeCryptoData: string;
  handleCardClick?: () => void;
}

const StyledCard = styled(Stack)({
  border: `1px solid ${theme.palette.gray[100]}`,
  padding: '24px 24px 0px 24px',
  borderRadius: '4px'
});

const GraphContainer = styled(Stack)({
  flexDirection: 'row',
  width: '100%',
  gap: '12px'
});

const IconTypographyContainer = styled(Stack)({
  flexDirection: 'column',
  gap: '12px'
});

const TypographyContainer = styled(Stack)({
  flexDirection: 'row',
  gap: '10px'
});

const StyledIconComponent = styled(IconComponent)({
  height: pxToRem(42),
  width: pxToRem(42)
});

const WatchListGraph = ({
  cryptoName,
  cryptoValue,
  cryptoIcon,
  data,
  changeCryptoData,
  handleCardClick
}: WatchListGraphProps) => {
  return (
    <StyledCard onClick={handleCardClick} data-testid="crypto-card">
      <GraphContainer>
        <IconTypographyContainer>
          <TypographyContainer>
            <StyledIconComponent src={cryptoIcon} alt="crypto" />
            <Stack flexDirection={'column'}>
              <TypographyComponent color={theme.palette.textColor.highEmp} variant="body1">
                {cryptoName}
              </TypographyComponent>
              <TypographyComponent
                color={theme.palette.textColor.highEmp}
                variant="body1">{`$${formattedAmount(cryptoValue)}`}</TypographyComponent>
            </Stack>
          </TypographyContainer>
          <Stack marginLeft={'48px'}>
            <Chip
              label={'24 h'}
              sx={{
                height: '18px',
                borderRadius: '100px',
                padding: '2px 8px 2px 8px'
              }}
              width="53px"
            />
          </Stack>
        </IconTypographyContainer>
        <Stack width="100%">
          <Graph
            data={graph_data}
            multiple={false}
            baseDataKey="name"
            firstDataKey="bitcoin"
            firstColor={
              changeCryptoData.startsWith('+')
                ? theme.palette.success[500]
                : theme.palette.error[500]
            }
            height={80}
            sx={{ width: '100%' }}
            changeData={changeCryptoData}
            src={changeCryptoData.startsWith('+') ? ProfitIcon : LossIcon}
          />
        </Stack>
      </GraphContainer>
    </StyledCard>
  );
};
export default WatchListGraph;
