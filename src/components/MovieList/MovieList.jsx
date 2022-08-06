import PropTypes from 'prop-types';
import { useLocation, generatePath } from 'react-router-dom';
import { Link } from '@mui/material';

export const MovieList = ({ movieId, title }) => {
  const location = useLocation();
  const movieList = generatePath(`/movies/${movieId}`, { movieId });

  return (
    <>
      <p key={movieId}>
        <Link to={movieList} state={{ from: location }}>
          {title}
        </Link>
      </p>
    </>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};
