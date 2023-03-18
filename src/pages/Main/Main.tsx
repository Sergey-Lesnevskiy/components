import Search from '../../components/Search/Search';
import React from 'react';
import style from './main.module.css';
import Board from '../../components/Board/Board';

export const cardItems = [
  {
    id: 1,
    title: 'foto',
    subTitle: 'home',
    like: 2,
    countEye: 6,
  },
  {
    id: 2,
    title: 'picture',
    subTitle: 'forest',
    like: 2,
    countEye: 8,
  },
  {
    id: 3,
    title: 'art',
    subTitle: 'human',
    like: 2,
    countEye: 7,
  },
  {
    id: 4,
    title: 'foto',
    subTitle: 'animals',
    like: 5,
    countEye: 6,
  },
  {
    id: 5,
    title: 'foto',
    subTitle: 'field',
    like: 4,
    countEye: 6,
  },
  {
    id: 6,
    title: 'foto',
    subTitle: 'yard',
    like: 2,
    countEye: 16,
  },
];
type MyState = { text: string };
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
