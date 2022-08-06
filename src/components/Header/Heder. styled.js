import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  height: 50px;
  background-color: '#FFFFFF';
  border-bottom: 2px solid grey;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const MainLink = styled(NavLink)`
  padding: 8px;
  border-radius: 10px;
  color: white;
  &.active,
  :hover {
    background-color: white;
    color: black;
  }
`;
