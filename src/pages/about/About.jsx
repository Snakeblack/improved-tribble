import React from "react";
import {
  Container,
  Description,
  Section,
  Title,
  TituloAnimado,
} from "./components/About.styled";

export const About = () => {
  return (
    <Container>
      <Section>
        <Title>
          <TituloAnimado>About</TituloAnimado>
        </Title>
        <Description>
          Esto es un texto descriptivo de prueba etc, Luego tal y luego pascual
        </Description>
      </Section>
    </Container>
  );
};
