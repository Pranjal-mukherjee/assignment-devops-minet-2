import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { pxToRem, theme } from '../../../theme';
import { TabPanel } from '@mui/lab';

export const TabsContainer = styled(Box)({
  display: 'flex',
  borderBottom: 1,
  borderColor: theme.palette.gray[100],
  '&.MuiTabs-indicator': {
    backgroundColor: theme.palette.primary[500]
  },
  '.MuiTab-root': {
    fontFamily: 'Graphik-Regular',
    fontSize: pxToRem(20),
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: pxToRem(28),
    letterSpacing: pxToRem(0.1),
    textTransform: 'none'
  },
  '.Mui-selected': {
    fontFamily: 'Graphik-Regular',
    fontSize: pxToRem(20),
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: pxToRem(28),
    letterSpacing: pxToRem(0.1),
    textTransform: 'none'
  },
  '.MuiTabs-flexContainer': {
    display: 'flex',
    gap: '44px'
  }
});

export const StyledTabPanel = styled(TabPanel)({
  padding: '0px',
  paddingTop: theme.spacing(5)
});
