import React from 'react';
import { SearchLabel, SearchInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const handleFilterChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <SearchLabel>
      Find contacts by name
      <SearchInput
        type="text"
        name="filter"
        value={filterValue.filter}
        onChange={handleFilterChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </SearchLabel>
  );
};

export default Filter;
