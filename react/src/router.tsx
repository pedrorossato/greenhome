import React from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import SobreNosPage from "./pages/sobrenos";
import IdeologiaPage from "./pages/ideologia";
import LoginPage from "./pages/login";
import ContatoPage from "./pages/contato";
import BlogPage from "./pages/blog";
import EmpreendimentosPage from "./pages/empreendimentos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/sobrenos",
    element: <SobreNosPage/>,
  },
  {
    path: "/ideologia",
    element: <IdeologiaPage/>,
  },
  {
    path: "/empreendimentos",
    element: <EmpreendimentosPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/contato",
    element: <ContatoPage/>,
  },
  {
    path: "/blog",
    element: <BlogPage/>,
  }
])

export default router;