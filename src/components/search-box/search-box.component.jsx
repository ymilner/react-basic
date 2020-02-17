import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, onChangeHandler }) => (
  <input
    type='search'
    className='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);
