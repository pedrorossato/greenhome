import React, { useContext } from "react";
import Header from "../../components/header";
import AuthContext from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    const loggedSuccessfully = await auth.authenticate(email, password)
    if(loggedSuccessfully)
      return navigate('/admin-panel')     

    toast.error('Login falhou, confira os dados preenchidos.')
  }
  
  return(
    <>
      <Header/>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required/>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" required/>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default LoginPage;