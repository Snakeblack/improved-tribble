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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus elementum ultricies. Nam finibus consequat elit, non lobortis lacus. Aliquam erat volutpat. Donec hendrerit tincidunt sem eu faucibus. Nunc euismod congue tellus efficitur pharetra. Fusce auctor augue felis, a fringilla sem blandit nec. Nunc in lectus odio. In hac habitasse platea dictumst.
        </Description>
      </Section>
    </Container>
  );
};
