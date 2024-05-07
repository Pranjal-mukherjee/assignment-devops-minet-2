import { Box, styled } from '@mui/material';
import ButtonComponent from '../../atoms/Button';
import { theme } from '../../../theme';

export const NavBarContainer = styled(Box)({
  display: 'inline-flex',
  padding: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '72px',
  flexShrink: '0px',
  backgroundColor: theme.palette.gray.white
});

export const ClickableIconButton = styled(ButtonComponent)({
  '&.MuiButtonBase-root': {
    minWidth: '32px',
    padding: 0
  }
});

export const NonClickableIcon = styled(ButtonComponent)({
  '&.MuiButtonBase-root': {
    minWidth: '32px',
    padding: 0,
    backgroundColor: 'transparent',
    pointerEvents: 'none',
    cursor: 'default'
  }
});
