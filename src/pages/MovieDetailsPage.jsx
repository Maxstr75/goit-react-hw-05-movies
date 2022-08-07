import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';

const MovieDetailsPage = () => {
  const { film, error, backLinkHref, movieId, backFrom } =
    useFetchMovieDetails();

  return (
    <>
      <Link to={backLinkHref}>
        <IoArrowBackOutline />
        Go back
      </Link>
      {error && <p>{error}</p>}
      {film && (
        <>
          <MovieDetails film={film} movieId={movieId} backFrom={backFrom} />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
