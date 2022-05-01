import React from "react";
import { Container, Wrapper } from "./styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <img
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__small@2x.png"
          alt="logo"
        />
      </Wrapper>
    </Container>
  );
};

export default Header;
