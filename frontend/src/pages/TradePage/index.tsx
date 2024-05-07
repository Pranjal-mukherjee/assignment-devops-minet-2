import  NavBar  from '../../components/organisms/NavBar';
import TradeTable from '../../components/organisms/TradeTable';
import TradeScreenTemplate from '../../components/templates/TradeScreenTemplate/TradeScreen';

export const TradePage = () => {
  return (
    <TradeScreenTemplate
      navbar={<NavBar />}
      innerBody={<TradeTable />}
    />
  );
};
