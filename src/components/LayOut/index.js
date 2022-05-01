import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import Productos from "../Productos";
import {
    Container,
    Wrapper
} from './styles';

export const LayOut = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Hero />
        <Productos />
      </Wrapper>
    </Container>
  );
};
