import React from 'react';
import PropTypes from 'prop-types';

function SelectFilter({ optionsForSelect, id, name, handleChange, value }) {
  return (
    <select
      data-testid={ id }
      name={ name }
      onChange={ handleChange }
      value={ value }
    >
      {optionsForSelect.map((option, index) => <option key={ index }>{option}</option>)}
    </select>
  );
}

export default SelectFilter;

SelectFilter.propTypes = {
  optionsForSelect: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
