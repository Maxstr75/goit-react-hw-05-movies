import PropTypes from 'prop-types';
import { useLocation, generatePath } from 'react-router-dom';

export const MovieList = ({ movieId, title }) => {
  const location = useLocation();
  const movieList = generatePath(`/movies/${movieId}`, { movieId });

  return (
    <>
      <li key={movieId}>
        <li to={movieList} state={{ from: location }}>
          {title}
        </li>
      </li>
    </>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};
