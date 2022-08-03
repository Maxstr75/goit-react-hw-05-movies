import { Outlet } from 'react-router-dom';
import { Link } from '@mui/material';

export const Header = () => {
  return (
    <>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/">Movies</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
