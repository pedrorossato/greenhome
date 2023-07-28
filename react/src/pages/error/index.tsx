import React from "react"
import {useRouteError} from "react-router-dom"
const Logo = require("../../assets/logo.png");

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();
  
  return (
    <div id="error-page">
      <img alt="logo " style={{width: "50vw"}} src={Logo}/>
      <div>
        <h1>Página não encontrada!</h1>
        <p>Por favor, confira o link da página.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;