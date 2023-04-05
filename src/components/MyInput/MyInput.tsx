import React from 'react';
import style from './formComponent.module.css';
import { PropsMyInput } from '../../types/type';

const MyInput = function MyInput(props: PropsMyInput) {
  return (
    <div className={style.wrapperLabel}>
      <label htmlFor={props.label} className={style.labelInput}>
        {props.text}
        <input
          data-testid={props.forTests}
          className={props.dirty && props.error ? style.inputErrors : '' + style.input}
          type={props.type}
          onChange={(event) => props.setFirstName(event)}
          onBlur={(event) => props.blur(event)}
          name={props.label}
          value={props.value}
        ></input>
      </label>
      {props.dirty && props.error && <p className={style.errorText}>{props.error} </p>}
    </div>
  );
};
export default MyInput;
