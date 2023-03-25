import MyInput from '../../components/MyInput/MyInput';
import React, { createRef, FormEvent, RefObject } from 'react';
import './form.module.css';
import style from './form.module.css';

export interface PropsForm {
  name: string;
  surName: string;
  date: string;
}
interface PersonCard {
  name: string;
  surName: string;
  date: string;
}
export interface StateForm {
  errors: { firstNameInput: string; lastNameInput: string; dateInput: string };
  disabled: boolean;
}
class FormPage extends React.Component<PropsForm, StateForm> {
  nameInput: React.RefObject<HTMLInputElement>;
  surName: React.RefObject<HTMLInputElement>;
  form: React.RefObject<HTMLFormElement>;
  dateRef: React.RefObject<HTMLInputElement>;

  constructor(props: PropsForm) {
    super(props);

    this.nameInput = createRef();
    this.surName = createRef();
    this.form = createRef();
    this.dateRef = createRef();
    this.state = {
      errors: { firstNameInput: '', lastNameInput: '', dateInput: '' },
      disabled: true,
      // firstNameInput: '',
    };
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.validate()) {
      const inputValueName = (this.nameInput as RefObject<HTMLInputElement>).current?.value;
      const inputValueSurName = (this.surName as RefObject<HTMLInputElement>).current?.value;
      const inputDate = (this.dateRef as RefObject<HTMLInputElement>).current?.value;
      if (inputValueName && inputValueSurName && inputDate) {
        const newCard: PersonCard = {
          name: inputValueName,
          surName: inputValueSurName,
          date: inputDate,
        };
        this.addCard(newCard);
      }

      (this.form as RefObject<HTMLFormElement>).current?.reset();
      this.setState({ disabled: true });
    }
  };
  addCard = (newCard: { name: string }) => {
    console.log(newCard);
  };

  componentDidUpdate() {
    if (this.state.disabled === false) {
      if (this.isAnyErrorValidator()) {
        this.setDisabledSubmit();
      }
    }
  }

  validate = () => {
    const errors = { firstNameInput: '', lastNameInput: '', dateInput: '' };
    let isValid = true;
    const inputValue = (this.nameInput as RefObject<HTMLInputElement>).current?.value;
    if (!inputValue?.length) {
      isValid = false;
      errors.firstNameInput = 'Please enter your first name';
    } else if (!/^[a-zA-Zа-яА-Я]+$/.test(inputValue)) {
      isValid = false;
      errors.firstNameInput = 'The first name must contain only letters';
    } else if (inputValue?.length < 2) {
      isValid = false;
      errors.firstNameInput = 'The first name must be more then 1 letter';
    }
    const inputValueSurName = (this.surName as RefObject<HTMLInputElement>).current?.value;
    if (!inputValueSurName?.length) {
      isValid = false;
      errors.lastNameInput = 'Please enter your last name';
    } else if (!/^[a-zA-Zа-яА-Я]+$/.test(inputValueSurName)) {
      isValid = false;
      errors.lastNameInput = 'The Last name must contain only letters';
    } else if (inputValueSurName?.length < 2) {
      isValid = false;
      errors.lastNameInput = 'The last name must be more then 1 letter';
    }
    const inputValueDate = (this.dateRef as RefObject<HTMLInputElement>).current?.value;
    console.log(inputValueSurName?.length);
    if (!inputValueDate?.trim()) {
      isValid = false;
      errors.dateInput = 'Please enter your date';
    }

    this.setState({
      errors: errors,
    });
    return isValid;
  };

  resetError = (error: string) => {
    if (error === 'Input Name') {
      if ((this.nameInput as RefObject<HTMLInputElement>).current?.value.length) {
        this.setState({
          errors: {
            ...this.state.errors,
            firstNameInput: '',
          },
        });
      } else {
        this.setState({
          errors: {
            ...this.state.errors,
            firstNameInput: error,
          },
        });
      }
    } else if (error === 'Input Last name') {
      if ((this.surName as RefObject<HTMLInputElement>).current?.value.length) {
        this.setState({
          errors: {
            ...this.state.errors,
            lastNameInput: '',
          },
        });
      } else {
        this.setState({
          errors: {
            ...this.state.errors,
            lastNameInput: error,
          },
        });
      }
    } else if (error === 'Input Date') {
      if ((this.dateRef as RefObject<HTMLInputElement>).current?.value.length) {
        this.setState({
          errors: {
            ...this.state.errors,
            dateInput: '',
          },
        });
      } else {
        this.setState({
          errors: {
            ...this.state.errors,
            dateInput: error,
          },
        });
      }
    }
  };
  setDisabledSubmit = () => {
    this.setState({
      disabled: true,
    });
  };

  setUndisabledSubmit = () => {
    this.setState({
      disabled: false,
    });
  };

  isAnyErrorValidator = () => {
    const errors = this.state.errors;
    if (errors.firstNameInput || errors.firstNameInput || errors.dateInput) {
      return true;
    }
    return false;
  };

  onFocus = (input: string) => {
    this.resetError(input);
    if (this.isAnyErrorValidator()) {
      this.setDisabledSubmit();
    }
  };

  onChange = (error: string) => {
    this.onFocus(error);
    this.setUndisabledSubmit();
    if (this.isAnyErrorValidator()) {
      this.setDisabledSubmit();
    }
  };
  render(): React.ReactNode {
    return (
      <form className={style.formsWrapper} onSubmit={this.handleSubmit} ref={this.form}>
        <MyInput
          type="input"
          name="name"
          label="Name"
          reference={this.nameInput}
          errorMessage={this.state.errors.firstNameInput}
          onBlur={this.onFocus}
          onChange={this.onChange}
        />
        {/* <div className={style.wrapperLabel}>
          <label className={style.labelInput}>First name:</label>
          <input
            type="input"
            ref={this.nameInput}
            className={this.state.errors.firstNameInput ? style.inputErrors : '' + style.input}
            onBlur={() => this.onFocus('Input Name')}
            onChange={() => this.onChange('Input Name')}
          ></input>
          {this.state.errors.firstNameInput && (
            <p className={style.errorText}>{this.state.errors.firstNameInput} </p>
          )}
        </div> */}
        <div className={style.wrapperLabel}>
          <label className={style.labelInput}>
            Last name:
            <input
              type="input"
              ref={this.surName}
              className={this.state.errors.lastNameInput ? style.inputErrors : '' + style.input}
              onBlur={() => this.onFocus('Input Last name')}
              onChange={() => this.onChange('Input Last name')}
            ></input>
          </label>
          {this.state.errors.lastNameInput && (
            <p className={style.errorText}>{this.state.errors.lastNameInput} </p>
          )}
        </div>
        <div className={style.wrapperLabel}>
          <label className={style.labelInput}>
            Date:
            <input
              type="date"
              ref={this.dateRef}
              className={this.state.errors.dateInput ? style.inputErrors : '' + style.input}
              onBlur={() => this.onFocus('Input Date')}
              onChange={() => this.onChange('Input Date')}
            ></input>
          </label>
          {this.state.errors.dateInput && (
            <p className={style.errorText}>{this.state.errors.dateInput} </p>
          )}
        </div>
        {/* <label className={style.labelInput}>
          Date:
          <input
            type="File"
            ref={this.nameInput}
            className={
              this.state.errors.firstNameInput ? style.inputErrorDate : '' + style.inputDate
            }
            // onBlur={() => this.onfocus('Input Date')}
            // onFocus={() => this.onfocus('')}
            onChange={this.onchange}
          ></input>
        </label>
        {this.state.errors.firstNameInput && (
          <p className={style.errorText}>{this.state.errors.firstNameInput} </p>
        )}
        your city :
        <select>
          <option>Minsk</option>
          <option>Brest</option>
          <option>Pinsk</option>
          <option>Grodno</option>
        </select>
        <div></div>
        <label>
          Send file:
          <input type="checkbox"></input>
        </label>
        <label>
          Radio:
          <input type="radio"></input>
        </label>
        <div></div> */}
        <button type="submit" disabled={this.state.disabled}>
          Submit
        </button>
      </form>
    );
  }
}
export default FormPage;
