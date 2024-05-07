import React from 'react';
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { StyledTabPanel, TabsContainer } from './styles';

interface ITabsProps {
  firstData: React.ReactNode;
  secondData: React.ReactNode;
  firstLabel: string;
  secondLabel: string;
}

const Tabs = ({ firstData, secondData, firstLabel, secondLabel }: ITabsProps) => {
  const [value, setValue] = React.useState<string>('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <TabsContainer>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={firstLabel} value="1" />
            <Tab label={secondLabel} value="2" />
          </TabList>
        </TabsContainer>
        <StyledTabPanel value="1">{firstData}</StyledTabPanel>
        <StyledTabPanel value="2">{secondData}</StyledTabPanel>
      </TabContext>
    </Box>
  );
};

export default Tabs;
