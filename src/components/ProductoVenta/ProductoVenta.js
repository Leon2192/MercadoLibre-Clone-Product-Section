import React from "react";
import {
  Container,
  Estado,
  Row,
  HeartIcon,
  Card,
  CheckIcon,
  Price,
  ButtonCard,
  Button,
  Cantidad,
  Color,
  Beneficios,
  ShildeIcon,
  CopaIcon,
} from "./styles";

const ProductoVenta = () => {
  return (
    <Container>
      <Estado>Nuevo | 4 vendidos</Estado>
      <Row>
        <h1>Cuadro Futbol Maradona Xl 33x48 (jdm (31))</h1>
        <HeartIcon />
      </Row>
      <Price>$ 2.400</Price>
      <Card>
        <CheckIcon />
        <div>
          <span className="title">Llega gratis mañana</span>
          <span className="detalle">Beneficio Mercado Puntos</span>
          <a href="#" className="more">Ver más formas de envío</a>
        </div>
      </Card>
      <Color>
        Color:<strong>No</strong>
      </Color>
      <Color>
        Color de Marco:<strong>No</strong>
      </Color>
      <Cantidad>
        <p>Cantidad</p>
        <strong>1 unidad</strong>
        <input type="number" value="" />
        <span>(7 disponibles)</span>
      </Cantidad>

      <ButtonCard>
        <Button className="solid">Comprar</Button>
        <Button>Agregar al carrito</Button>
      </ButtonCard>
      <Beneficios>
        <li>
          <ShildeIcon />
          <p>
            Compra protegida,{" "}
            <span>
              recibe el producto que esperabas o te devolvemos el dinero
            </span>
          </p>
        </li>
        <li>
          <CopaIcon />
          <p>
            Mercado Puntos
            <span>sumás 24 puntos.</span>
          </p>
        </li>
      </Beneficios>
    </Container>
  );
};

export default ProductoVenta;
