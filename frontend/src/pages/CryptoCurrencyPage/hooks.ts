import { useQuery } from '@tanstack/react-query';
import { getCoinDetail } from '../../services';

export const useCoinDetail = (coinName: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['coin_detail', coinName],
    queryFn: () => getCoinDetail(coinName)
  });
  return { coinData: data, isLoading: isLoading };
};
