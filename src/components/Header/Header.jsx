import { Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <nav>
        <container>
          <wrapper>
            <link to="/">Home</link>
            <link to="/">Movies</link>
          </wrapper>
        </container>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
