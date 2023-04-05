import style from './showSend.module.css';
import React from 'react';
export interface PropsShowSend {
  text: string;
}
class ShowSend extends React.Component<PropsShowSend> {
  constructor(props: PropsShowSend) {
    super(props);
  }
  render() {
    return <div className={style.showCard}>{this.props.text}</div>;
  }
}

export default ShowSend;
