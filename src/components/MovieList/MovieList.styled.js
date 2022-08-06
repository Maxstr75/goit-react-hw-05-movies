import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkItem = styled.li`
  padding: 20px;
`;

export const LinkStyled = styled(Link)`
  color: royalBlue;
  :hover {
    color: red;
  }
`;
