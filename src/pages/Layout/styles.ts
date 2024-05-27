import styled from "@emotion/styled"
import { NavLink, Link } from "react-router-dom"

import { Logo } from "assets"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color:  #faebd6;  
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px 70px;
  width: 100%;
  height: fit-content;
  background-color: #509d21;
  color: white;
`

export const HeaderLogoContainer = styled.div`
  width: 70px;
  height: 60px;
  cursor: pointer;
`

export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

HeaderLogo.defaultProps = { src: Logo }

export const NavContainer = styled.nav`
  display: flex;
  gap: 26px;
  margin-left: 50px;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`

export const Footer = styled.footer`
  display: flex;
  padding: 30px 70px;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  /* background-color: #2f5a6e; */
  color: white;
`

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  color: white;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: white;
`
