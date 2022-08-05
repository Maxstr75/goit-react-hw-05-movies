import { Suspense } from 'react';
import {
  Link,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { fetchMovieDetails } from 'services/api';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const backFrom = useRef(backLinkHref);

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    const fetch = async () => {
      try {
        const { data } = await fetchMovieDetails(movieId);
        setFilm(data);
      } catch (e) {
        if (e.response.status === 404) {
          return navigate(`/`);
        }
        setError(e.message);
      }
    };
    fetch();
  }, [movieId, navigate]);

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
