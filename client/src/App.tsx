import React from 'react';
import { ThemeProvider } from '@mui/material';

import defaultThemme from './ui/theme/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={defaultThemme}>

    </ThemeProvider>
  );
};

export default App;