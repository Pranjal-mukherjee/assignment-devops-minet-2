import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { Box } from '@mui/material';

export const StyledMainContainer = styled(Box)({
  width: '100%',
  padding: '24px',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  borderRadius: '4px',
  border: `1px solid ${theme.palette.gray[100]}`,
  background:theme.palette.gray.white
});

export const StyledDropdown = styled(Box)({
  cursor: 'pointer',
  width: '100%',
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '4px',
  border: `1px solid ${theme.palette.gray[100]}`,
  marginTop: '12px'
});

export const StyledMenuItems = styled(Box)({
  cursor: 'pointer',
  display: 'flex',
  width: '100%',
  padding: '16px 24px 16px 60px',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  border: `1px solid ${theme.palette.gray[100]}`,
  borderTop: 'none',
  ':hover': {
    backgroundColor: theme.palette.gray[50]
  },
  '@media (max-width: 600px)': {
    padding: '12px 16px',
    flexDirection: 'column'
  }
});
