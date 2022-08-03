import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

const HomePage = () =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */);
const MoviesPage = () =>
  import('pages/MoviesPage' /* webpackChunkName: "movies-page" */);
const MovieDetailsPage = () =>
  import('pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */);
const Cast = () => import('pages/Cast' /* webpackChunkName: "Cast" */);

const Reviews = () => import('pages/Reviews' /* webpackChunkName: "Reviews" */);

export const App = () => {
  return (
    <h2>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </h2>
  );
};
