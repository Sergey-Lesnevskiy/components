import React, { KeyboardEvent } from 'react';

import style from './search.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks/useTypedSelector';
import { setSearchValue } from '../../store/Cards';

const Search = function Search() {
  const dispatch = useAppDispatch();
  const text = useAppSelector((state) => state.Card.searchValue);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      dispatch(setSearchValue((e.target as HTMLInputElement).value));
    } catch (error) {
      alert(error);
    }
  };
  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    try {
      if (e.key === 'Enter') {
        console.log('ljk;ty ghjbc[jlbnm gjbcr');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <label className={style.wrapper__search}>
      <input
        className={style.search}
        defaultValue={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search"
      />
    </label>
  );
};

export default Search;
