import { DeleteWatchlistById, GetWatchLists, PostWatchlist } from '../services';
import { theme } from '../theme';

export const formattedAmount = (totalBalance: number | undefined) => {
  return totalBalance?.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

export const formatDuration = (duration?: string) => {
  if (duration) {
    if (/^\d+-\d+ minutes$/.test(duration) || /^\d+ minutes$/.test(duration)) {
      return duration.replace(' minutes', ' min');
    } else {
      return duration;
    }
  } else {
    return '';
  }
};

interface ICustomLegendProps {
  payload?: { value: string; color: string }[];
}

export const CustomLegend = ({ payload }: ICustomLegendProps) => {
  return (
    <ul
      style={{
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        gap: theme.spacing(5),
        justifyContent: 'flex-end'
      }}>
      {payload?.map((entry, index) => (
        <li
          key={`${entry.value}`}
          style={{ display: 'flex', alignItems: 'center', gap: theme.spacing(0) }}>
          <div
            style={{
              width: theme.spacing(1),
              height: theme.spacing(1),
              backgroundColor: entry.color,
              borderRadius: '50%',
              marginRight: theme.spacing(1)
            }}
          />
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

export const getCurrentDateFormatted = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getUserID = (): number => {
    const userObject = JSON.parse(localStorage.getItem('user')!);
    return userObject.id;
};

export const getCoinName=(code:string)=>{
  if(code === "BTC")
  return "Bitcoin"
  else
  return "Ethereum"
}

export const handleWatchlist = async (
  cryptoId: number,
  setWatchlistData?: React.Dispatch<React.SetStateAction<any>>
) => {
  try {
    const userId = await getUserID();
    const WatchlistData = await GetWatchLists();
    
    const isWatchlistEmpty = !WatchlistData || WatchlistData.length === 0;
    const existingWatchlistItem = WatchlistData?.find(
      (item: any) => item.coinId === cryptoId && item.userId === userId
    );

    if (!setWatchlistData && (isWatchlistEmpty || !existingWatchlistItem)) {
      await PostWatchlist(cryptoId);
    } else if (setWatchlistData) {
      if (isWatchlistEmpty || !existingWatchlistItem) {
        const response = await PostWatchlist(cryptoId);
        setWatchlistData(response);
      } else {
        const response = await DeleteWatchlistById(existingWatchlistItem.id);
        setWatchlistData(response);
      }
    }
  } catch (error) {
    console.error('Error in postOrDeleteWatchlist:', error);
  }
};

export const formattedDate = (inputDate:string) => {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const extractMonthAndDay=(dateString:string)=> {
  const dateObject = new Date(dateString);
  
  // Get the month name
  const monthNames = [
    "Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  const monthName = monthNames[dateObject.getMonth()];

  // Get the day
  const day = dateObject.getDate();

  return { monthName, day };
}

export const getUserData = () => {
  let userDetailsJSON = localStorage.getItem("user");
  if (userDetailsJSON) {
  let  userDetails = JSON.parse(userDetailsJSON);
    return userDetails;
  } else {
    console.log("User details not found in localStorage");
  }
};

export const getTradeData = () => {
  let  purchaseDetailsJSON = localStorage.getItem("PurchaseDetails");
  if (purchaseDetailsJSON) {
    let purchaseDetails = JSON.parse(purchaseDetailsJSON);
    return purchaseDetails;
  } else {
    console.log("User details not found in localStorage");
  }
};
