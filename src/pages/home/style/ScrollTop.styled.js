import styled from "styled-components";

export const ScrollUp = styled.div`
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
    position: fixed;
    left: calc(100% - 150px);
    animation: up 1.5s infinite;
    -webkit-animation: up 1.5s infinite;

    &::before {
      content: "";
      position: absolute;
      top: 24px;
      left: 18px;
      width: 18px;
      height: 18px;
      border-left: 2px solid #333;
      border-bottom: 2px solid #333;
      transform: rotate(135deg);
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
