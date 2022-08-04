import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from '@mui/material';
import { Loader } from 'components/Loader/Loader';

export const Header = () => {
  return (
    <>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/">Movies</Link>
      </nav>
      <main>
        <Suspense fallback={<Loader />}></Suspense>
        <Outlet />
      </main>
    </>
  );
};
