import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'services/api';

const MoviesPages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') ?? '');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search === '') {
      return;
    }
    setSearchParams({ search });

    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await fetchMoviesBySearch(search);

        setFilms(results);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [search, setSearchParams]);

  return (
    <>
      <SearchForm onSearch={setSearch} />
      {error && <p>{error}</p>}
      {films.map(({ title, id }) => {
        return <MovieList key={id} movieId={id} title={title} />;
      })}
    </>
  );
};

export default MoviesPages;
