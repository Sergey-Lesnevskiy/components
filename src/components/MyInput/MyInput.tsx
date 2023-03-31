import React, { Dispatch, SetStateAction } from 'react';
import style from './formComponent.module.css';

interface PropsMyInput {
  label: string;
  text: string;
  error: string;
  value: string;
  type: string;
  setFirstName: Dispatch<SetStateAction<string>>;
}

const MyInput = function MyInput(props: PropsMyInput) {
  return (
    <div className={style.wrapperLabel}>
      <label htmlFor="firstName" className={style.labelInput}>
        {props.text}
        <input
          className={props.error ? style.inputErrors : '' + style.input}
          type={props.type}
          onChange={(event) => props.setFirstName(event.target.value)}
          name="firstName"
          value={props.value}
        ></input>
      </label>
      {props.error && <p className={style.errorText}>{props.error} </p>}
    </div>
  );
};
export default MyInput;
