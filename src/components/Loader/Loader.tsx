import React from 'react';
import style from './loader.module.css';

export default function Loader() {
  return (
    <section data-testid={'loader'} className={style._loading}>
      <div className={style.mod}>
        <div className={style.spinner}></div>
      </div>
    </section>
  );
}
