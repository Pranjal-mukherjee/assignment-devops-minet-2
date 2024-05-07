import { OriginalData } from '.';
import { pxToRem } from '../../../theme';
import { IMAGE_URL } from '../../../utils/constants';
import TradeCard from '../../molecules/TradeCard';
import { CustomStack } from './style';

interface TradeTableContentProps {
  navValue: string;
  TableHeader: React.ReactNode;
  transactions: OriginalData[];
  watchlistCryptoData: OriginalData[];
  handleCardOnClick: (coinName: string) => void;
  isWatchlisted: (cryptoId: number) => boolean;
  postOrDeleteWatchlist: (cryptoId: number) => void;
}

const TradeTableContent: React.FC<TradeTableContentProps> = ({
  navValue,
  TableHeader,
  transactions,
  watchlistCryptoData,
  handleCardOnClick,
  isWatchlisted,
  postOrDeleteWatchlist
}) => {
  return (
    <>
      {navValue === 'AllAssets' ? (
        <>
          {TableHeader}
          {transactions.map((data) => (
            <CustomStack
              key={data.id}
              data-testid="table-data1"
              onClick={() => handleCardOnClick(data.name)}>
              <TradeCard
                data-testid={`Test-${data.name}`}
                src={`${IMAGE_URL}${data?.src}`}
                coinHeight={pxToRem(42)}
                coinWidth={pxToRem(42)}
                coinName={data?.name}
                coinCode={data?.symbol}
                priceChange={`${data?.changeData}%`}
                price={data?.price}
                marketCap={`$${data?.marketCap}T`}
                checked={isWatchlisted(data?.id)}
                onClick={() => {
                  postOrDeleteWatchlist(data?.id);
                }}
              />
            </CustomStack>
          ))}
        </>
      ) : (
        <>
          {TableHeader}
          {watchlistCryptoData?.map((data) => (
            <CustomStack
              key={data?.id}
              data-testid="table-data2"
              onClick={() => handleCardOnClick(data.name)}>
              <TradeCard
                src={`${IMAGE_URL}${data?.src}`}
                coinHeight={pxToRem(42)}
                coinWidth={pxToRem(42)}
                coinName={data?.name}
                coinCode={data?.symbol}
                priceChange={`${data?.changeData}%`}
                price={data?.price}
                marketCap={`$${data?.marketCap}T`}
                checked={true}
                onClick={() => {
                  postOrDeleteWatchlist(data?.id);
                }}
              />
            </CustomStack>
          ))}
        </>
      )}
    </>
  );
};

export default TradeTableContent;
