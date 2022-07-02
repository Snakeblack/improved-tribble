import styled from "styled-components";
import { motion } from "framer-motion";

export const HtmlBody = styled.span`
    color: #1a4a4d;
    font-family: "Island Moments", cursive;
    font-size: 1.8vw;
    font-weight: 700;
    @media screen and (max-width: 500px) {
        font-size: 16px;
    }

    h1::after {
        content: "<html>";
        color: #1a4a4d;
        font-family: "Island Moments", cursive;
        font-size: 1.8vw;
        font-weight: 700;
        @media screen and (max-width: 500px) {
            font-size: 16px;
        }
    }
`;

export const Container = styled(motion.main)`
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 80%;
    margin: 0 auto;
    justify-content: center;

    h1::before {
        content: "<h1>";
        color: #1a4a4d;
        filter: grayscale(0);
        font-family: "Island Moments", cursive;
        font-size: 1.8vw;
        font-weight: 700;
        background: #1a4a4d;
        -webkit-background-clip: text;
        @media screen and (max-width: 500px) {
            font-size: 16px;
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
        @media screen and (max-width: 500px) {
            font-size: 16px;
        }
    }

    p::before {
        content: "<p>";
        color: #1a4a4d;
        font-family: "Island Moments", cursive;
        font-size: 1.8vw;
        font-weight: 700;
        @media screen and (max-width: 500px) {
            font-size: 16px;
        }
    }

    p::after {
        content: " </p>";
        color: #1a4a4d;
        font-family: "Island Moments", cursive;
        font-size: 1.8vw;
        font-weight: 700;
        @media screen and (max-width: 500px) {
            font-size: 16px;
        }
    }

    @media (max-width: 500px) {
        transform: scale(1.15);
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
        font-size: 3rem;
    }

    @media screen and (max-width: 432px) {
        font-size: 2.7rem;
    }

    @media screen and (max-width: 394px) {
        font-size: 2.4rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 2.2rem;
    }
`;

export const NombreAnimado = styled.span`
    display: inline-block;
    font-weight: 800;
    cursor: url('https://firebasestorage.googleapis.com/v0/b/portfolio-581ed.appspot.com/o/images%2Fcursor.png?alt=media&token=efe8c296-c259-4e12-baf7-29311013ec0e'), auto;

    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    color: var(--bright-maroon);

    &:hover {
        color: #B2ECE1;
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
    cursor: url('https://firebasestorage.googleapis.com/v0/b/portfolio-581ed.appspot.com/o/images%2Fcursor.png?alt=media&token=efe8c296-c259-4e12-baf7-29311013ec0e'), auto;

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
    cursor: url('https://firebasestorage.googleapis.com/v0/b/portfolio-581ed.appspot.com/o/images%2Fcursor.png?alt=media&token=efe8c296-c259-4e12-baf7-29311013ec0e'), auto;

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
        font-size: 1.3rem;
    }

    @media screen and (max-width: 432px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 394px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 0.8rem;
    }
`;

export const IconAnimated = styled.div`
    position: absolute;
    top: 5%;
    right: 4%;
    width: 20vw;
    height: auto;
    cursor: url('https://firebasestorage.googleapis.com/v0/b/portfolio-581ed.appspot.com/o/images%2Fpointer.png?alt=media&token=02d26594-9d74-4d6c-b0c2-e3c63a558ef8'), pointer;
    
    svg {
        fill: var(--silver);
        filter:drop-shadow(10px 4px 20px #000);
        transition: all .5s ease-in-out .1s;
        transform: rotate(12deg);
        &:hover {
            transition: all .5s ease-in-out 0s;
            fill: var(--bright-maroon);
            transform: rotate(-12deg) scale(1.3);
        }   
    } 

    @media (max-width: 900px) {
        display: none;
    }
`;

export const ScrollDown = styled.a``;
