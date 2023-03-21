import Search from '../../components/Search/Search';
import React from 'react';
import style from './main.module.css';
import Board from '../../components/Board/Board';
import { MyState } from '../../types/type';
import { cardItems } from '../../data/bd';

class Main extends React.Component<unknown, MyState> {
  constructor(props: string) {
    super(props);
    this.state = { text: window.localStorage.getItem('test') || '' };
  }
  handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: (event.target as HTMLInputElement).value });
    this.componentWillUnmount();
  };
  componentWillUnmount() {
    localStorage.setItem('test', this.state.text);
  }

  render(): React.ReactNode {
    return (
      <div className={style.main}>
        <Search handleClick={this.handleClick} state={this.state.text} />
        <Board cards={cardItems.filter((item) => item.subTitle.includes(this.state.text))} />
      </div>
    );
  }
}
export default Main;
