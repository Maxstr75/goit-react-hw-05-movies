import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from '@mui/material';
import { Loader } from 'components/Loader/Loader';

export const Header = () => {
  return (
    <>
      <nav>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </nav>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
