import React from "react";
import { About } from "../about/About";
import { Projects } from "../projects/Projects";
import {
  Container,
  Title,
  Description,
  ScrollDown,
  HtmlBody,
  IconAnimated,
  LetraAnimada,
  NombreAnimado,
  WebAnimado,
  Section,
  MainSection,
} from "./components/Home.styled";
import SvgComponent from "./components/SvgComponent";

export const Home = () => {
  return (
    <>
      <Container id="scroll">
        <MainSection
          id="section-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IconAnimated>
            <a
              href="https://github.com/snakeblack"
              rel="noreferrer"
              target="_blank"
            >
              <SvgComponent />
            </a>
          </IconAnimated>
          <HtmlBody>
            &lt;html&gt;
            <br />
            &lt;body&gt;
          </HtmlBody>
          <Title>
            <br />
            <LetraAnimada>H</LetraAnimada>
            <LetraAnimada>i</LetraAnimada>
            <LetraAnimada>,</LetraAnimada>
            <br />
            <LetraAnimada>I</LetraAnimada>
            <LetraAnimada>'</LetraAnimada>
            <LetraAnimada>m</LetraAnimada>
            &nbsp;
            <NombreAnimado>M</NombreAnimado>
            <NombreAnimado>a</NombreAnimado>
            <NombreAnimado>n</NombreAnimado>
            <NombreAnimado>u</NombreAnimado>
            <NombreAnimado>e</NombreAnimado>
            <NombreAnimado>l</NombreAnimado>
            <LetraAnimada>,</LetraAnimada>
            <br />
            <WebAnimado>Web</WebAnimado>&nbsp;
            <WebAnimado>Developer</WebAnimado>
          </Title>
          <Description>
            <br />
            Full&nbsp;Stack&nbsp;Developer&nbsp;/&nbsp;MERN&nbsp;&&nbsp;JAVA
            <br />
          </Description>
        </MainSection>
        <ScrollDown>
          <a href="#section-2"></a>
        </ScrollDown>
        <Section id="section-2">
          <About />
        </Section>
        <ScrollDown>
          <a href="#section-3"></a>
        </ScrollDown>
        <Section id="section-3">
          <Projects />
        </Section>
      </Container>
    </>
  );
};
