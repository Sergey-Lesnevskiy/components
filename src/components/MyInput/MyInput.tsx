import React from 'react';
import { PropsMyInput } from '../../types/type';
import style from './myInput.module.css';

class MyInput extends React.Component<PropsMyInput> {
  constructor(props: PropsMyInput) {
    super(props);
  }

  render() {
    return (
      <div className={style.wrapperInput}>
        <div className={style.wrapperLabel}>
          <label className={style.labelInput} htmlFor={this.props.name}>
            {this.props.label}
            <input
              id={this.props.name}
              type={this.props.type}
              ref={this.props.reference}
              className={this.props.errorMessage ? style.inputErrors : '' + style.input}
              onBlur={() => this.props.onBlur(this.props.errorFocus)}
              onChange={() => this.props.onChange(this.props.errorFocus)}
            ></input>
          </label>

          {this.props.errorMessage && <p className={style.errorText}>{this.props.errorMessage} </p>}
        </div>
      </div>
    );
  }
}

export default MyInput;
