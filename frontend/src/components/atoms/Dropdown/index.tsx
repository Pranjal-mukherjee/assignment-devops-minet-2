import { Box, MenuItem, Select, styled } from '@mui/material';
import React from 'react';
import { theme } from '../../../theme';
import IconComponent from '../Icon';
import TypographyComponent from '../../atoms/Typography';
import Chevron from '../../../../public/assets/images/chevronDown.svg';

interface DropDownProps {
  width: string | React.CSSProperties;
  onChange?: (value: any) => void;
  disabled?: boolean;
  menuList: Array<string>;
  backgroundColor?: string | React.CSSProperties;
  variant:
    | 'inherit'
    | 'h4'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';
  fontColor?: string;
  value?: string;
}

const StyledIcon = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '32px !important',
  marginRight: '12px',
  marginLeft: '0px'
}));

const StyledDropDown = styled(Select)(() => ({
  backgroundColor: theme.palette.gray.white,
  cursor: 'pointer',
  alignItems: 'center',
  '& .MuiSelect-select': {
    height: '22px',
    padding: '9px 0 8px 4px !important'
  },
  '& .MuiTypography-root': {
    paddingLeft: '8px !important'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.gray[100]} !important`,
    padding: '0px'
  },
  input: {
    '&::placeholder': {
      padding: '0px !important',
      color: theme.palette.gray[500],
      fontFace: 'body2'
    }
  }
}));

const ChevronIcon = () => {
  return (
    <StyledIcon>
      <IconComponent src={Chevron} width="32px" height="32px" />
    </StyledIcon>
  );
};

 const DropDown: React.FC<DropDownProps> = (props) => {
  const { onChange, menuList, width, backgroundColor, variant, fontColor, disabled, value } = props;
  return (
    <StyledDropDown
      data-testid="dropDown"
      defaultValue={menuList[0]}
      onChange={(e) => onChange?.(e.target.value)}
      value={value}
      sx={{ width: width, backgroundColor: backgroundColor }}
      IconComponent={ChevronIcon}
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left'
        }
      }}>
      {menuList.map((menuItem) => (
        <MenuItem key={menuItem} value={menuItem} data-testid={menuItem} disabled={disabled}>
          <TypographyComponent variant={variant} color={fontColor}>
            {menuItem}
          </TypographyComponent>
        </MenuItem>
      ))}
    </StyledDropDown>
  );
};
export default DropDown;