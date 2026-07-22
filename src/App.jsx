import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import ProductCard1 from 'src/components/ProductCard1/ProductCard1';
import ProductCard2 from 'src/components/ProductCard2/ProductCard2';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<ProductCard1/>} />
          <Route path="p2" element={<ProductCard2/>} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;