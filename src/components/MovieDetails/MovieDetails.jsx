import PropTypes from 'prop-types';
import { Link } from '@mui/material';

export const MovieDetails = ({
  film: { poster_path, release_date, vote_average, genres, title, overview },
  movieId,
  backFrom,
}) => {
  const filmPoster = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : 'https://upload.wikimedia.org/wikipedia/commons/archive/a/ac/20121003093557%21No_image_available.svg';

  const releaseDate = release_date.slice(0, 4);
  const userScore = vote_average.toFixed(1) * 10;
  const genresList = genres.map(e => e.name).join(', ');

  return (
    <>
      <div>
        <img src={filmPoster} alt={title} width={300} height={450} />
        <ul>
          <>
            <h1>
              {title} ({releaseDate})
            </h1>
            <p>User Score: {userScore}%</p>
          </>
          <li>
            <label>Overview</label>
            <p>{overview}</p>
          </li>
          <li>
            <label>Genres</label>
            <p>{genresList}</p>
          </li>
        </ul>
      </div>
      <div>
        <p>More information</p>
        <ul>
          <li>
            <Link
              to={`/movies/${movieId}/cast`}
              state={{ from: backFrom.current }}
            >
              --- Cast ---
            </Link>
          </li>
          <li>
            <Link
              to={`/movies/${movieId}/reviews`}
              state={{ from: backFrom.current }}
            >
              --- Reviews ---
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  film: PropTypes.shape({
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }),
  movieId: PropTypes.string.isRequired,
  backFrom: PropTypes.object.isRequired,
};
