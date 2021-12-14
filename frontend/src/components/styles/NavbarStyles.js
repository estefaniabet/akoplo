import styled from "styled-components"

export const NavbarWrapper = styled.nav`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: right;
  background: #5BBC45;
  position: fixed;
  top: 10vh;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;
  font-size: 18px;
  font-family: arial;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: right;
    background: #5BBC45;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: #fff;
    text-decoration: none;
  }
`