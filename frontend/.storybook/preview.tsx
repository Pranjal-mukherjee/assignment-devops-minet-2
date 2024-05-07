import type { Preview } from '@storybook/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import './preview.css';
import { theme } from '../src/theme';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
