import styled from "styled-components";

export const Container = styled.header`
  // background-color: #21232A;
  height: 100vh;
  width: 10vw;
  @media screen and (max-width: 1024px) {
    width: 0vw;
  }
`;

export const Wrapper = styled.nav`
  background: #101010;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
  width: 100%;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 0vh;
    position: unset;
  }

  p:nth-child(2n) {
    bottom: 26px;
    color: #282828;
    position: absolute;
    font-family: "Manrope", sans-serif;
    font-size: 0.9rem;
    text-align: center;
    width: inherit;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

export const LogoContainer = styled.div`
  align-items: center;
  background: black;
  cursor: pointer;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-size: 2.1vw;
  font-weight: 600;
  height: 10vw;
  justify-content: center;
  margin: 0 auto;
  position: absolute;
  width: 100%;
  top: 0;

  p {
    color: var(--silver);
    margin: 20px auto;
    text-transform: uppercase;
    text-shadow: 0px 3px 2px rgba(150, 150, 150, 1);
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }

  .logo {
    text-decoration: none;
  }
`;

export const Menu = styled.ul`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    padding: 0;

    @media screen and (max-width: 1024px) {
        background-color: #0e0e0e;
        position: absolute;
        left: ${({ open }) => (open ? "0" : "-100%")}; //Import
        width: 100%;
        height: 100vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
        z-index: 10;
    }
`;

export const MenuItem = styled.li`
  height: 100%;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: ce;
    align-items: center;
  }

  .link {
    width: 100%;
    text-decoration: none;
  }
`;

export const MenuItemLink = styled.span`
  align-items: center;
  display: flex;
  color: #fff5ee;
  cursor: url("https://firebasestorage.googleapis.com/v0/b/portfolio-581ed.appspot.com/o/images%2Fpointer.png?alt=media&token=02d26594-9d74-4d6c-b0c2-e3c63a558ef8"),
    pointer;
  font-family: "Poppins", sans-serif;
  font-size: 1vw;
  font-weight: 300;
  height: 100%;
  justify-content: center;
  padding: 0.5rem 2.5rem;
  text-decoration: none;
  transition: 0.5s all ease;

  &:hover {
    color: #ccc;
    background-color: #123234;
    transition: 0.5s all ease;
    div {
      svg {
        fill: gray;
        transition: 0.8s all ease;
      }
    }
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      fill: #fff;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 1024px) {
    font-size: 2rem;
    width: 100%;
    div {
      width: 30%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #101010;
  z-index: 11;
  transition: 1s all ease;
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #fff;
    }
  }
`;
