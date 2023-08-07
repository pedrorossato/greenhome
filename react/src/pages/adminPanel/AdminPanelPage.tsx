import React, {useContext} from "react";
import Header from "../../components/header";
import {StyledNavButton} from "../../components/header/styles";
import AuthContext from "../../contexts/auth/AuthContext";
const AdminPanelPage : React.FC = () => {
  const auth = useContext(AuthContext);
  const username = auth.user?.name || '';
  
  return (
    <>
      <Header>
        <StyledNavButton selected>
          Painel administrativo
        </StyledNavButton>
      </Header>
      <p>{username}</p>    
    </>
  )
}

export default AdminPanelPage;