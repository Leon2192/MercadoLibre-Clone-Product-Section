import React from "react";
import Garantia from "../Garantia/Garantia";
import Info from "../Info/Info";
import InfoVendedor from "../InfoVendedor/InfoVendedor";
import ProductoVenta from "../ProductoVenta/ProductoVenta";
import { Container, Panel, Column, Galeria } from "./styles";

const Productos = () => {
  return (
    <Container>
      <Panel>
        <Column>
          <Galeria>
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_657627-MLA44194289952_112020-O.webp"
              alt="producto"
            />
          </Galeria>
          <Info />
        </Column>
        <Column>
          <ProductoVenta />
          <InfoVendedor />
          <Garantia />
        </Column>
      </Panel>
    </Container>
  );
};

export default Productos;
