import React from "react";
import { Container, Row } from "./styles";

const Hero = () => {
  return (
    <Container>
      <Row>
        <a href="#" className="volver">
          Volver al listado
        </a>
        <a href="#">Hogar, muebles y jardín</a>
        <a href="#">Adornos y decoración del hogar</a>
        <a href="#">Cuadros, carteles y espejos</a>
        <a href="#">Cuadros</a>
      </Row>
      <Row>
        <a href="#">Compartir</a>
        <a href="#">Vender una igual</a>
      </Row>
    </Container>
  );
};

export default Hero;
