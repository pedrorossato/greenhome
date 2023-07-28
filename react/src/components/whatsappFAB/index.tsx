import {WhatsApp} from "@mui/icons-material";
import {Fab} from "@mui/material";
import React from "react";

const WhatsappFAB : React.FC = () => {
  const link: string = 'https://api.whatsapp.com/send?phone=5555981233139&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20empreendimentos%20da%20construtora%20Green%20Home.';
  
  const handleClick = () => {
    window.open(link, '_blank')
  }
  
  return (
    <Fab onClick={handleClick}
         sx={{margin: 0, top: 'auto', right: 20, bottom: 20, left: 'auto', position: 'fixed'}}
         color="success"
         aria-label="add">
      <WhatsApp />
    </Fab>
  )
}

export default WhatsappFAB;