import React from "react";
import Header from "../../components/header";
import WhatsappFAB from "../../components/whatsappFAB";

const ContatoPage : React.FC = () => {
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    }
    const data = new FormData(event.currentTarget);
    const nome = data.get('nome') || "";
    const email = data.get('email') || "";
    const mensagem = data.get('mensagem') || "";
    
    //TODO Fetch backend para enviar email
  }
  
  return (
    <>
      <Header/>
      <WhatsappFAB/>
    </>
  )
}

export default ContatoPage;