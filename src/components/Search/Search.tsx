import React from 'react';
import { MyState, Props } from 'types/type';
import style from './search.module.css';

class Search extends React.Component<Props, MyState> {
  constructor(props: Props) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <label className={style.wrapper__search}>
        <input
          className={style.search}
          defaultValue={this.props.state}
          onChange={this.props.handleClick}
          type="text"
          placeholder="Search"
        />
      </label>
    );
  }
}
export default Search;
