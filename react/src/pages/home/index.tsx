import React from "react";
import Header from "../../components/header";
import WhatsappFAB from "../../components/whatsappFAB";
import {Carousel} from "react-bootstrap";
const Image1 = require("../../assets/bg-body.jpg");
const Image2 = require("../../assets/bandasderock-712x264.jpg");
const Image3 = require("../../assets/AnyDesk_cirB3OCSzp.png");
const Image4 = require("../../assets/o-piloto-esta-no-caca-visao-geral-da-cabine-de-caca-de-aviao-equipe-acrobatica-no-ar-um-lutador-militar-nas-nuvens-figuras-de-pilatagem-mais-alta-o-piloto-de-um-aviao-militar_315087-8.webp");

const HomePage: React.FC = () => {
  const carouselItemInterval: number = 2000;
  return (
    <>
      <Header/>
      <Carousel>
        <Carousel.Item interval={carouselItemInterval}>
          <img style={{width: '100%'}} src={Image1} alt="logo"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={carouselItemInterval}>
          <img style={{width: '100%'}} src={Image2} alt="logo"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={carouselItemInterval}>
          <img style={{width: '100%'}} src={Image3} alt="logo"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={carouselItemInterval}>
          <img style={{width: '100%'}} src={Image4} alt="logo"/>
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <WhatsappFAB/>
    </>
  );
}

export default HomePage;