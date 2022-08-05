import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export const SearchForm = ({ onSubmit }) => {
  const { register, reset } = useForm();

  const handleSubmit = ({ query }) => {
    query.preventDefault();
    if (query.trim() === '') {
      toast.warn('Please specify your query!', {
        autoClose: 3000,
      });

      return;
    }

    onsubmit(query);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          {...register('query')}
          type="text"
          placeholder="Search Movie"
          autoComplete="off"
          autoFocus
        />
        <span type="submit">Search</span>
      </form>
    </>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
