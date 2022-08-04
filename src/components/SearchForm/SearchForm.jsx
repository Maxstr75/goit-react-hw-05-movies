import PropTypes from 'prop-types';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { toast } from 'react-scripts';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  // Отслеживает изменение инпута и записывает значение в стейт
  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };
  // Отслеживает отправку и передает значение во внешний компонент
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.warn('Please specify your query!', {
        autoClose: 3000,
      });

      return;
    }
    onSubmit(query);
    reset();
  };
  // Сброс после отправки
  const reset = () => {
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <FiSearch style={{ width: 30, height: 30 }} />
        </button>

        <input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
