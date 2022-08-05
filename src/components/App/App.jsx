import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from 'components/Header/Header';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
  import('pages/MoviesPage' /* webpackChunkName: "movies-page" */)
);

const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */)
);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'first baseline',
        alignItems: 'left',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
