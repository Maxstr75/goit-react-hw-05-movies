// import { useState, useEffect } from 'react';
// import { fetchTrends } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
import { useFetchTrends } from 'hooks/useFetchTrends';

const HomePage = () => {
  // Вынес в hooks
  // const [films, setFilms] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const {
  //         data: { results },
  //       } = await fetchTrends();

  //       setFilms(results);
  //     } catch (e) {
  //       setError(e.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const { films, error } = useFetchTrends();
  return (
    <>
      <h1>Trending movies</h1>
      {error && <p>{error}</p>}
      {films.map(({ title, id }) => {
        return <MovieList key={id} movieId={id} title={title} />;
      })}
    </>
  );
};

export default HomePage;
