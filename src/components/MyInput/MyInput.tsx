import React from 'react';
import style from './myInput.module.css';

export interface PropsMyInput {
  type: string;
  name: string;
  label: string;
  reference: React.RefObject<HTMLInputElement>;
  errorMessage: string;
  onBlur: (input: string) => void;
  onChange: (error: string) => void;
}
// export interface StateForm {
//   name: boolean;
// }
class MyInput extends React.Component<PropsMyInput> {
  constructor(props: PropsMyInput) {
    super(props);
  }

  render() {
    return (
      <div className={style.wrapperInput}>
        <div className={style.wrapperLabel}>
          <label className={style.labelInput} htmlFor={this.props.name}>
            First name:
          </label>
          <input
            id={this.props.name}
            type={this.props.type}
            ref={this.props.reference}
            className={this.props.errorMessage ? style.inputErrors : '' + style.input}
            onBlur={() => this.props.onBlur('Input Name')}
            onChange={() => this.props.onChange('Input Name')}
          ></input>

          {this.props.errorMessage && <p className={style.errorText}>{this.props.errorMessage} </p>}
        </div>
      </div>
    );
  }
}

export default MyInput;
