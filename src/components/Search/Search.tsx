import React from 'react';
import { Props } from 'types/type';
import style from './search.module.css';

const Search = function Search(props: Props) {
  return (
    <label className={style.wrapper__search}>
      <input
        className={style.search}
        defaultValue={props.state}
        onChange={props.handleClick}
        type="text"
        placeholder="Search"
      />
    </label>
  );
};

export default Search;
