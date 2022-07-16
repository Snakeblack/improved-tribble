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
          Soy un programador fullstack en el desarrollo web, actualmente trabajo
          en el CEF (Centro de Estudios Financieros) como técnico informático,
          con experiencia en desarrollo de software vb.net y cursando para la
          certificación OCP (Oracle Certified Professional JAVA) y estudiante en
          42 Madrid de la Fundación Telefonica.<br/>
          Actualmente el stack que más uso
          es MERN, con frameworks como Nextjs (el que usa esta web), como React
          - Firebase, Mongo-Express, etc... Aunque tambien controlo Lenguajes
          backend como PHP y base de datos relacionales como MySQL y SQL Server.
        </Description>
      </Section>
    </Container>
  );
};
