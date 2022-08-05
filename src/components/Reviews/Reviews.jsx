import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await fetchReviews(movieId);

        setReviews(results);
        setIsLoad(true);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [movieId]);

  const noReviews = reviews.length === 0 && isLoad;

  return (
    <>
      {error && <p>{error}</p>}
      {noReviews && <p>We don`t have any reviews for this movie</p>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>
                  <b>Author: {author}</b>
                </p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
