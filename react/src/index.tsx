import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from "./globalStyle";
import {AuthProvider} from "./contexts/auth/AuthProvider";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import ContatoPage from "./pages/contato";
import {ToastContainer} from "react-toastify";
import AuthWrapper from './contexts/auth/AuthWrapper';
import AdminPanelPage from './pages/adminPanel/AdminPanelPage';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path={"/contato"} element={<ContatoPage/>} />
          <Route path={"/admin-panel"} element={<AuthWrapper><AdminPanelPage/></AuthWrapper>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);