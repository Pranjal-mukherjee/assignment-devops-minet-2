import { Box } from '@mui/material';
import { theme } from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import IconTypographyStack from '../../molecules/IconTypographyStack';
import delivery from '../../../../public/assets/images/delivery.svg';
import IconComponent from '../../atoms/Icon';
import chevronDown from '../../../../public/assets/images/chevronDown.svg';
import chevronUp from '../../../../public/assets/images/chevronUp.svg';
import { useState } from 'react';
import {
  DELIVERY_FEE,
  SELECT_SPEED_DELIVERY,
  SpeedDeliveryData,
  TRANSACTION_FEE
} from '../../../utils/constants';
import { StyledDropdown, StyledMainContainer, StyledMenuItems } from './style';
import { formatDuration } from '../../../utils/functions';

 const SpeedDelivery = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState<{
    duration?: string;
    fees?: string;
    speed?: string;
  }>({ duration: '2-5 min', fees: '0.001 BTC', speed: 'Instant :' });

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleMenuItemClick = (deliveryData: any) => {
    if (deliveryData.speed === 'None') {
      setSelectedDelivery({
        speed: deliveryData.speed,
        duration: '',
        fees: '0'
      });
    } else {
      setSelectedDelivery({
        duration: deliveryData.duration,
        fees: deliveryData.fees,
        speed: deliveryData.speed
      });
    }
    setIsDropdownOpen(false);
  };

  return (
    <StyledMainContainer>
      <TypographyComponent variant="body1" color={theme.palette.textColor.highEmp}>
        {SELECT_SPEED_DELIVERY}
      </TypographyComponent>
      <StyledDropdown onClick={handleDropdownToggle} data-testid="delivery-dropdown">
        <IconTypographyStack
          firstTextVariant="body1"
          secondTextVariant="caption1"
          firstTextColor={theme.palette.textColor.highEmp}
          secondTextColor={theme.palette.textColor.medEmp}
          firstText={`${selectedDelivery.speed} ${formatDuration(selectedDelivery.duration)}`}
          secondText={`${TRANSACTION_FEE} ${selectedDelivery.fees} `}
          coinIcon={delivery}
          coinIconAlt="delivery-icon"
        />
        <IconComponent src={isDropdownOpen ? chevronUp : chevronDown} alt="chevron-icon" />
      </StyledDropdown>
      {isDropdownOpen && (
        <>
          {SpeedDeliveryData.map((deliveryData) => (
            <StyledMenuItems
              data-testid="menu-item"
              key={deliveryData.id}
              onClick={() => handleMenuItemClick(deliveryData)}>
              <Box display={'flex'}>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.textColor.highEmp}
                  style={{ marginRight: '4px' }}>
                  {deliveryData.speed}
                </TypographyComponent>
                <TypographyComponent variant="body1" color={theme.palette.textColor.highEmp}>
                  {deliveryData.duration}
                </TypographyComponent>
              </Box>
              {deliveryData.fees !== undefined && (
                <Box>
                  <TypographyComponent variant="caption2" color={theme.palette.textColor.medEmp}>
                    {DELIVERY_FEE}
                  </TypographyComponent>
                  <TypographyComponent variant="caption2" color={theme.palette.textColor.medEmp}>
                    {deliveryData.fees}
                  </TypographyComponent>
                </Box>
              )}
            </StyledMenuItems>
          ))}
        </>
      )}
    </StyledMainContainer>
  );
};
export default SpeedDelivery;