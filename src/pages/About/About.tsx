import React from 'react';
import style from './about.module.css';

class About extends React.Component {
  render(): React.ReactNode {
    return <div className={style.about}>Hello, my name is Sergey. I am studying in RS-school</div>;
  }
}
export default About;
