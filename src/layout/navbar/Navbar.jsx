import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./components/Navbar.styled";
import {
    FaBars,
    FaTimes
} from "react-icons/fa";
import { IconContext } from "react-icons";

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <Link
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className={"logo"}
              to="/"
            >
              <p>MMRG</p>
            </Link>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <NavLink
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={(_isActive) => "link"}
                to="/"
              >
                <MenuItemLink>
                  {/* <FaHome /> */}
                  HOME
                </MenuItemLink>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={(_isActive) => "link"}
                to="/about"
              >
                <MenuItemLink>
                  {/* <FaUserAlt /> */}
                  ABOUT
                </MenuItemLink>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={(_isActive) => "link"}
                to="/portfolio"
              >
                <MenuItemLink>
                  {/* <FaBriefcase /> */}
                  PORTFOLIO
                </MenuItemLink>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={(_isActive) => "link"}
                to="/contact"
              >
                <MenuItemLink>
                  {/* <FaGlasses /> */}
                  CONTACT
                </MenuItemLink>
              </NavLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
        <p>Snake Design</p>
      </Wrapper>
    </Container>
  );
};
