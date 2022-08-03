import { Outlet } from 'react-router-dom';
import { Container } from 'components/App/App.styled';
import { LinkWrapper, NavBar, NavLinkStyled } from './Header.styled';

export const Header = () => {
  return (
    <>
      <NavBar>
        <Container>
          <LinkWrapper>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </LinkWrapper>
        </Container>
      </NavBar>
      <main>
        <Outlet />
      </main>
    </>
  );
};
