import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export const SearchForm = ({ onSearch }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ query }) => {
    const queryNormalized = query.trim();

    if (!queryNormalized) {
      return toast('Please, enter the text');
    }

    onSearch(queryNormalized);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('query')}
          type="text"
          placeholder="Movie Search"
          autoComplete="off"
          autoFocus
        />
        <submit type="submit">Search</submit>
      </form>
    </>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
