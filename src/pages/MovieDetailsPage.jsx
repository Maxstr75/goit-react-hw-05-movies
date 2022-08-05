import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { useState, useEffect, useRef } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
// import { fetchMovieDetails } from 'services/api';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';

const MovieDetailsPage = () => {
  //   const [film, setFilm] = useState(null);
  //   const [error, setError] = useState(null);

  //   const { movieId } = useParams();
  //   const navigate = useNavigate();

  //   const location = useLocation();
  //   const backLinkHref = location.state?.from ?? '/';
  //   const backFrom = useRef(backLinkHref);

  //   useEffect(() => {
  //     if (movieId === '') {
  //       return;
  //     }
  //     const fetchData = async () => {
  //       try {
  //         const { data } = await fetchMovieDetails(movieId);
  //         setFilm(data);
  //       } catch (e) {
  //         if (e.response.status === 404) {
  //           return navigate(`/`);
  //         }
  //         setError(e.message);
  //       }
  //     };
  //     fetchData();
  //   }, [movieId, navigate]);

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
