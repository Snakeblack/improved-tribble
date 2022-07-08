import styled from "styled-components";
import { motion } from "framer-motion"

export const Container = styled(motion.main)`
  height: 100vh;
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 80vw;
  margin: 0;
  padding: 0 0 0 2.1rem;
  justify-content: center;
  position: relative;
  scroll-snap-align: start;

  h1::before {
    content: "<h1>";
    color: #1a4a4d;
    filter: grayscale(0);
    font-family: "Island Moments", cursive;
    font-size: 1.8vw;
    font-weight: 700;
    background: #1a4a4d;
    -webkit-background-clip: text;
    @media screen and (max-width: 530px) {
      font-size: 1.5rem;
    }
  }

  h1::after {
    content: " </h1>";
    color: #1a4a4d;
    filter: grayscale(0);
    font-family: "Island Moments", cursive;
    font-size: 1.8vw;
    font-weight: 700;
    background: #1a4a4d;
    -webkit-background-clip: text;
    @media screen and (max-width: 530px) {
      font-size: 1.5rem;
    }
  }

  p::before {
    content: "<p>";
    color: #1a4a4d;
    font-family: "Island Moments", cursive;
    font-size: 1.8vw;
    font-weight: 700;
    @media screen and (max-width: 530px) {
      font-size: 1.5rem;
    }
  }

  p::after {
    content: " </p>";
    color: #1a4a4d;
    font-family: "Island Moments", cursive;
    font-size: 1.8vw;
    font-weight: 700;
    @media screen and (max-width: 530px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 530px) {
    margin: 0;
    padding: 0 0 0 0.6rem;
    width: 100vw;
  }
`;

export const Title = styled.h1`
  color: var(--silver);
  font-family: "Manrope", sans-serif;
  font-size: 6vw;
  font-weight: 600;
  justify-content: center;
  margin: 0 0;

  @media screen and (max-width: 1024px) {
    font-size: 5.2rem;
  }

  @media screen and (max-width: 960px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 818px) {
    font-size: 3.7rem;
  }

  @media screen and (max-width: 618px) {
    font-size: 3.1rem;
  }

  @media screen and (max-width: 530px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 3.2rem;
  }

  @media screen and (max-width: 415px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 391px) {
    font-size: 2.8rem;
  }
`;

export const WebAnimado = styled.span`
  display: inline-block;
  font-weight: 800;
  cursor: url("https://firebasestorage.googleapis.com/v0/b/portfolio-581ed.appspot.com/o/images%2Fcursor.png?alt=media&token=efe8c296-c259-4e12-baf7-29311013ec0e"),
    auto;

  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  color: var(--silver);
  &:hover {
    color: var(--bright-maroon);
    -webkit-animation: glitch 2500ms infinite linear alternate-reverse;
    animation: glitch 2500ms infinite linear alternate-reverse;
  }
`;