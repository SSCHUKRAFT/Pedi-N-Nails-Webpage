import React from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import { About, Gallery, Home, Services, Specials } from './pages';
import './App.css';

const theme = createTheme({
  primaryColor: 'gold',
  colors: {
    gold: [
      '#fff7df',
      '#fbecc0',
      '#f5dea0',
      '#efcf7f',
      '#e9c160',
      '#ddb04a',
      '#bc9038',
      '#8d6b2b',
      '#5e471d',
      '#31240e',
    ],
  },
  black: '#060606',
  white: '#f7f1e3',
  defaultRadius: 'md',
  fontFamily: 'abel, sans-serif',
  headings: {
    fontFamily: 'Georgia, Times New Roman, serif',
    fontWeight: '600',
  },
});

const App = () => (
  <MantineProvider theme={theme}>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/specials" element={<Specials />} />
      </Route>
    </Routes>
  </MantineProvider>
);

export default App;
