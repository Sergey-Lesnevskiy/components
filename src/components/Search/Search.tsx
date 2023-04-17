import React, { KeyboardEvent, useState } from 'react';

import style from './search.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks/useTypedSelector';
import { setSearchValue } from '../../store/Cards';

const Search = function Search() {
  const text = useAppSelector((state) => state.Card.searchValue);
  const [searchText, setSearchText] = useState(text || '');
  const dispatch = useAppDispatch();

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    try {
      if (e.key === 'Enter') {
        dispatch(setSearchValue(searchText));
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <label className={style.wrapper__search}>
      <input
        className={style.search}
        defaultValue={searchText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchText((event.target as HTMLInputElement).value);
        }}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search"
      />
    </label>
  );
};

export default Search;
