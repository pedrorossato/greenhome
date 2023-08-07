import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Container} from "@mui/material";
import {StyledNav, StyledNavButton} from "./styles";
const Logo = require("../../assets/logo.png");

interface HeaderProps {
  children?: React.ReactNode;
}

const Header : React.FC<HeaderProps> = ({children}) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActualLocation = (path: string) => {
    return location.pathname === path;
  }
  
  return (
    <Container component="header" sx={{display: "flex", alignItems: "center"}}>
        <a href="/">
          <img style={{height: 100}} src={Logo} alt="logo"/>
        </a>
        <StyledNav>
          <StyledNavButton
            onClick={() => navigate('/sobrenos')}
            selected={isActualLocation('/sobrenos')}>
            Sobre nós
          </StyledNavButton>
          <StyledNavButton
            onClick={() => navigate('/ideologia')}
            selected={isActualLocation('/ideologia')}>
            Ideologia
          </StyledNavButton>
          <StyledNavButton
            onClick={() => navigate('/empreendimentos')}
            selected={isActualLocation('/empreendimentos')}>
            Empreendimentos
          </StyledNavButton>
          <StyledNavButton
            onClick={() => navigate('/contato')}
            selected={isActualLocation('/contato')}>
            Contato
          </StyledNavButton>
          <StyledNavButton
            onClick={() => navigate('/blog')}
            selected={isActualLocation('/blog')}>
            Blog
          </StyledNavButton>
          {children}
        </StyledNav>
    </Container>
  );
}

export default Header;