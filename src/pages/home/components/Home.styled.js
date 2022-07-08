import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.main)`
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  /* overflow-x: hidden; */
  scroll-snap-type: y mandatory;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 75vw;
  margin: 0;
  padding: 0;
  justify-content: center;
  position: relative;
  scroll-snap-align: start;
  padding: 0 0 0 5vw;
  box-sizing: border-box;

  h1::before {
    content: "<h1>";
    color: var(--silver-html);
    font-family: "Island Moments", cursive;
    font-size: 1.8vw;
    font-weight: 700;

    @media screen and (max-width: 530px) {
      font-size: 1.5rem;
    }
  }

  h1::after {
    content: " </h1>";
    color: var(--silver-html);
    font-family: "Island Moments", cursive;
    font-size: 1.8vw;
    font-weight: 700;

    @media screen and (max-width: 530px) {
      font-size: 1.5rem;
    }
  }

  p::before {
    content: "<p>";
    color: var(--silver-html);
    font-family: "Island Moments", cursive;
    font-size: 1.8vw;
    font-weight: 700;
    @media screen and (max-width: 530px) {
      font-size: 1.5rem;
    }
  }

  p::after {
    content: " </p>";
    color: var(--silver-html);
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
    width: 99.4vw;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 80vw;
  margin: 0;
  padding: 0;
  justify-content: center;
  position: relative;
  scroll-snap-align: start;
  box-sizing: border-box;

  @media (max-width: 530px) {
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
  word-wrap: break-word;

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
    font-size: 3.4rem;
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

export const HtmlBody = styled.span`
  color: var(--silver-html);
  font-family: "Island Moments", cursive;
  font-size: 1.8vw;
  font-weight: 700;
  @media screen and (max-width: 530px) {
    font-size: 1.5rem;
  }

  h1::after {
    content: "<html>";
    color: var(--silver-html);
    font-family: "Island Moments", cursive;
    font-size: 1.8vw;
    font-weight: 700;
    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
`;

export const NombreAnimado = styled.span`
  display: inline-block;
  font-weight: 800;
  cursor: url("https://firebasestorage.googleapis.com/v0/b/portfolio-581ed.appspot.com/o/images%2Fcursor.png?alt=media&token=efe8c296-c259-4e12-baf7-29311013ec0e"),
    auto;

  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  color: var(--bright-maroon);

  &:hover {
    color: #b2ece1;
    -webkit-animation-name: rubberBand;
    animation-name: rubberBand;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
`;

export const LetraAnimada = styled.span`
  display: inline-block;
  font-weight: 800;
  cursor: url("https://firebasestorage.googleapis.com/v0/b/portfolio-581ed.appspot.com/o/images%2Fcursor.png?alt=media&token=efe8c296-c259-4e12-baf7-29311013ec0e"),
    auto;

  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;

  &:hover {
    color: var(--metallic-seaweed);
    -webkit-animation-name: rubberBand;
    animation-name: rubberBand;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
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

export const Description = styled.p`
  align-items: center;
  color: #c7abab;
  font-family: "Manrope", sans-serif;
  font-size: 1.3vw;
  font-weight: 200;
  justify-content: center;
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 818px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 618px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 530px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 415px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 391px) {
    font-size: 0.8rem;
  }
`;

export const IconAnimated = styled.div`
  position: absolute;
  top: 5%;
  left: 80%;
  width: 20vw;
  height: auto;
  cursor: url("https://firebasestorage.googleapis.com/v0/b/portfolio-581ed.appspot.com/o/images%2Fpointer.png?alt=media&token=02d26594-9d74-4d6c-b0c2-e3c63a558ef8"),
    pointer;

  svg {
    fill: var(--silver);
    filter: drop-shadow(30px 0px 5px rgba(0, 0, 0, 0.2));
    transition: all 0.5s ease-in-out 0.1s;
    transform: rotate(12deg);
    &:hover {
      transition: all 0.5s ease-in-out 0s;
      fill: var(--bright-maroon);
      transform: rotate(-12deg) scale(1.3);
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ScrollDown = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  text-align: center;
  position: relative;

  a {
    width: 60px;
    height: 60px;
    border: 2px solid #333;
    border-radius: 50%;
    position: absolute;
    left: calc(100% - 150px);
    animation: down 1.5s infinite;
    -webkit-animation: down 1.5s infinite;

    &::before {
      content: "";
      position: absolute;
      top: 15px;
      left: 18px;
      width: 18px;
      height: 18px;
      border-left: 2px solid #333;
      border-bottom: 2px solid #333;
      transform: rotate(-45deg);
    }
  }

  @media screen and (max-width: 1024px) {
    
    &:{
      justify-content: center;
    }

    a {
      width: 30px;
      height: 30px;
      position: relative;
      bottom: 2rem;

      &::before {
        top: 7px;
        left: 8px;
        width: 8px;
        height: 8px;
      }
    }
  }
`;
