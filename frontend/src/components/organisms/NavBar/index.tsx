import React, { useEffect, useState } from 'react';
import IconComponent from '../../atoms/Icon';
import { ClickableIconButton, NavBarContainer, NonClickableIcon } from './style';
import { NavBarData } from '../../../utils/constants';
import minetLogo from '../../../../public/assets/images/minetLogo.svg';
import dashboard from '../../../../public/assets/images/dashboard.svg';
import dashboardActive from '../../../../public/assets/images/dashboardActive.svg';
import logoutIcon from '../../../../public/assets/images/logout.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth0Provider } from '../../../utils/auth0Provider';
import Tooltip from '@mui/material/Tooltip';

 const NavBar = () => {
  const [activeIcon, setActiveIcon] = useState<number | null>(null);
  const { logout } = useAuth0Provider();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isDashboardActive = location.pathname.includes('/dashboard');
    setActiveIcon(isDashboardActive ? 1 : null);
  }, [location.pathname]);

  const handleIconClick = (iconId: number) => {
    setActiveIcon(iconId);
    navigate('/dashboard');
  };

  const renderIconWithTooltip = (
    iconSrc: string,
    altText: string,
    tooltipText: string,
    onClick?: () => void
  ) => {
    return (
      <Tooltip title={tooltipText} arrow>
        <ClickableIconButton onClick={onClick}>
          <IconComponent src={iconSrc} alt={altText} />
        </ClickableIconButton>
      </Tooltip>
    );
  };

  return (
    <NavBarContainer data-testid="navbar">
      <IconComponent src={minetLogo} alt="minet-logo" />
      {activeIcon === 1
        ? renderIconWithTooltip(dashboardActive, 'Active-dashboard-icon', 'Dashboard', () =>
            handleIconClick(1)
          )
        : renderIconWithTooltip(dashboard, 'dashboard-icon', 'Dashboard', () => handleIconClick(1))}
      {NavBarData.map((icon) => (
        <NonClickableIcon key={icon.id}>
          {renderIconWithTooltip(icon.src, icon.alt, icon.tooltip)}
        </NonClickableIcon>
      ))}
      {renderIconWithTooltip(logoutIcon, 'logout-icon', 'Logout', logout)}
    </NavBarContainer>
  );
};
export default NavBar;