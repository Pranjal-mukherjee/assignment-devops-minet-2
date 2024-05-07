import { Box } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import { theme } from '../../../theme';
import PortfolioCard from '../../molecules/PortfolioCard';
import list from '../../../../public/assets/images/listIcon.svg';
import chart from '../../../../public/assets/images/chart.svg';
import IconComponent from '../../atoms/Icon';
import { MY_PORTFOLIO, PORTFOLIO_TOTAL_BALANCE } from '../../../utils/constants';
import {
  StyledBalanceContainer,
  StyledDivider,
  StyledPortfolioBox,
  StyledPortfolioCardContainer,
  StyledPortfolioHeader
} from './style';
import { formattedAmount } from '../../../utils/functions';

export interface MyPortfolioTableProps {
  MyPortfolioTableData: Array<{
    id: number;
    src: string;
    coinName: string;
    shortForm: string;
    amount: number;
    percentage: number;
  }>;
  balance? : number
}
 const MyPortfolioTable: React.FC<MyPortfolioTableProps> = ({ MyPortfolioTableData,balance }) => {
  return (
    <StyledPortfolioBox>
      <StyledPortfolioHeader>
        <TypographyComponent variant="subtitle1" color={theme.palette.textColor.highEmp}>
          {MY_PORTFOLIO}
        </TypographyComponent>
        <Box display={'flex'}>
          <IconComponent src={chart} />
          <IconComponent src={list} />
        </Box>
      </StyledPortfolioHeader>
      <StyledPortfolioCardContainer>
        {MyPortfolioTableData.map((tableData) => (
          <PortfolioCard
            key={tableData.id}
            iconSrc={tableData.src}
            coinName={tableData.coinName}
            coinShortForm={tableData.shortForm}
            amount={tableData.amount}
            percentage={tableData.percentage}></PortfolioCard>
        ))}
      </StyledPortfolioCardContainer>
      <StyledDivider />
      <StyledBalanceContainer>
        <TypographyComponent variant="body1" color={theme.palette.textColor.medEmp}>
          {PORTFOLIO_TOTAL_BALANCE}
        </TypographyComponent>
        <TypographyComponent variant="body1" color={theme.palette.textColor.highEmp}>
          {`$${formattedAmount(balance)?.toString()}`}
        </TypographyComponent>
      </StyledBalanceContainer>
      <StyledDivider />
    </StyledPortfolioBox>
  );
};
export default MyPortfolioTable;
