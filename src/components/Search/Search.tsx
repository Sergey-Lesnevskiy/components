import React from 'react';
import style from './search.module.css';

type MyState = { text: string };
class Search extends React.Component<unknown, MyState> {
  constructor(props: string) {
    super(props);
    this.state = { text: window.localStorage.getItem('test') || '' };
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: (event.target as HTMLInputElement).value });
    this.componentWillUnmount();
  };
  componentWillUnmount() {
    localStorage.setItem('test', this.state.text);
  }

  render(): React.ReactNode {
    return (
      <label className={style.wrapper__search}>
        <input
          className={style.search}
          defaultValue={this.state.text}
          onChange={this.handleChange}
          type="text"
          placeholder="Search"
        />
      </label>
    );
  }
}
export default Search;
