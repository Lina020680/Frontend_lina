import { useNavigate } from "react-router-dom";
import { LayoutProps } from "./types";
import {
  LayoutWrapper,
  Header,
  HeaderLogoContainer,
  HeaderLogo,
  NavContainer,
  Main,  
  Footer,
  StyledNavLink,
  StyledLink,
  FooterNavContainer,
} from "./styles"
import { Logo } from "assets"


function Layout({ children, isUserLoggedIn }: LayoutProps) {
  const navigate = useNavigate();
  
  const goToHomePage = () => navigate("/")

  const handleLinkClick = (path: string) => {
    if (!isUserLoggedIn && (path === "/anleitung" || path === "/meinetöpfe")) {
      alert("Melde dich bitte an, das dauert nur 1 Minute!");
    } else {
      navigate(path);
    }
  };

  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo src={Logo} />
        </HeaderLogoContainer>        
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/guide"
            onClick={() => handleLinkClick("/guide")}
          >
            Anleitung
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/mypots"
            onClick={() => handleLinkClick("/mypots")}
          >
          Töpfe
          </StyledNavLink>
          <button onClick={() => navigate("/login")}>
            Anmelden
          </button>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo src={Logo} />
        </HeaderLogoContainer>
        <FooterNavContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/mypots">Meine Töpfe</StyledLink>
        </FooterNavContainer>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout