import { Box, styled, Tab, Tabs } from '@mui/material';
import * as React from 'react';
import { theme } from '../../../theme';

interface TimeLineTabsProps {
  typevariant?: 'Dashboard' | 'Detail';
  onSelectTab?: () => void;
  value?: number;
  onChange?: (event: React.SyntheticEvent<Element, Event>, value: any) => void;
  timeLineValues?: string[];
}

const StyledTimeLineTabs = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    display: 'none'
  }
}));

const StyledTimeLineTab = styled(Tab)((props: TimeLineTabsProps) => ({
  '&.Mui-selected': {
    color: theme.palette.primary[500],
    backgroundColor: props.typevariant == 'Dashboard' ? 'none' : theme.palette.structural.blue,
    textDecoration: props.typevariant == 'Dashboard' ? '2px underline ' : 'none',
    fontFamily: theme.typography.caption2,
    textUnderlineOffset: '6px'
  },
  alignItems: 'center',
  minWidth: '32px',
  minHeight: '32px !important',
  borderRadius: props.typevariant == 'Dashboard' ? 0 : '50%',
  color: theme.palette.primary[900],
  textTransform: 'none',
  padding: '8px !important',
  margin: '5px'
}));

const StyledBox = styled(Box)(() => ({
  maxWidth: 304,
  maxHeight: 52,
  border: `1px solid ${theme.palette.gray[100]}`,
  marginTop: '1px ',
  padding: '10px 16px',
  display: 'flex',
  alignItems: 'center',
  '&.MuiTabs-root': {
    alignItems: 'center'
  },
  '&.MuiTabs-flexContainer': {
    gap: theme.spacing(4)
  }
}));

export default function TimeLineTabs(props: Readonly<TimeLineTabsProps>) {
  const { typevariant, onSelectTab } = props;

  return (
    <StyledBox>
      <StyledTimeLineTabs
        value={props.value}
        onChange={props.onChange}
        variant="scrollable"
        scrollButtons={false}
        data-testid="tabs">
        {props.timeLineValues!.map((value) => {
          return (
            <StyledTimeLineTab
              key={`tab-${value}`}
              label={value}
              typevariant={typevariant}
              data-testid={`tab-${value}`}
              onClick={onSelectTab}
              disabled={value !== '1M'}
            />
          );
        })}
      </StyledTimeLineTabs>
    </StyledBox>
  );
}
