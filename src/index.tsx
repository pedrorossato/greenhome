import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/home";
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  }
])

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);
