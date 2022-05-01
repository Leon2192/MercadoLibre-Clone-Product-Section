import React from "react";
import { Section } from "./styles.js";

const Garantia = () => {
  return (
    <Section>
      <h5>Garantia</h5>
      <div>
        <span>
          <p className="title">Compra protegida con MercadoPago</p>
          <p className="description">
            Recibí el producto que esperabas o te devolvemos tu dinero
          </p>
        </span>
        <span>
          <p className="title">Garantía del vendedor</p>
          <p className="description">Ninguna</p>
        </span>
        <a href="#">Conocer más sobre garantía</a>
      </div>
    </Section>
  );
};

export default Garantia;
