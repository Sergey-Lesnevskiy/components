import MyInput from '../../components/MyInput/MyInput';
import React, { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';
import style from './formComponent.module.css';

interface propsForm {
  setFormValues: Dispatch<SetStateAction<ErrorsState[]>>;
}

interface ErrorsState {
  firstName: string;
  lastName: string;
  birthDate: string;
  // fileInput: string;
  country: string;
  // agree: boolean;
  // maleInput: string;
}
const FormComponent = function FormComponent({ setFormValues }: propsForm) {
  const [disabledButton, setDisabledButton] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<ErrorsState>({
    firstName: '',
    lastName: '',
    birthDate: '',
    // fileInput: '',
    country: '',
    // agree: false,
    // maleInput: '',
  });

  const validate = () => {
    setErrors({
      firstName: '',
      lastName: '',
      birthDate: '',
      // fileInput: '',
      country: '',
      // agree: false,
      // maleInput: '',
    });
    let isValid = true;
    // if (!agree) {
    //   setErrors((state) => ({ ...state, agree }));
    //   isValid = false;
    // }
    if (birthDate === '') {
      setErrors((state) => ({ ...state, birthDate: 'FirstName should be fill' }));
      isValid = false;
    }
    if (country === '') {
      setErrors((state) => ({ ...state, country: 'FirstName should be fill' }));
      isValid = false;
    }
    if (firstName === '') {
      setErrors((state) => ({ ...state, firstName: 'FirstName should be fill' }));
      isValid = false;
    }
    if (lastName === '') {
      setErrors((state) => ({ ...state, lastName: 'LastName should be fill' }));
      isValid = false;
    }
    console.log(isValid);
    setDisabledButton(!isValid);
    return isValid;
  };
  const isAnyErrorValidator = () => {
    if (
      errors.firstName

      // errors.dateInput ||
      // errors.fileInput ||
      // errors.cityInput ||
      // errors.approvalInput ||
      // errors.maleInput
    ) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    validate();
  }, [firstName, lastName, birthDate, country]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      setFormValues((state) => [...state, { firstName, lastName, birthDate, country }]);
      reset();
    }
    // else {
    //   setDisabledSubmit();
    // }
    // this.setState({ show: 'Your data is send' });
    // this.setState({ disabledButton: true });
  };

  const reset = () => {
    setAgree(false);
    setCountry('Select country');
    setFirstName('');
    setLastName('');
    setBirthDate('');
  };
  const setDisabledSubmit = () => {
    setDisabledButton(true);
  };

  const setUndisabledSubmit = () => {
    setDisabledButton(false);
  };

  return (
    <form className={style.formsWrapper} onSubmit={handleSubmit}>
      <MyInput
        label="firstName"
        text="Name:"
        type="text"
        error={errors.firstName}
        value={firstName}
        setFirstName={setFirstName}
      />
      <MyInput
        label="lastName"
        type="text"
        text="Surname:"
        error={errors.lastName}
        value={lastName}
        setFirstName={setLastName}
      />
      <MyInput
        label="birthDate"
        type="date"
        text="Birthday:"
        error={errors.birthDate}
        value={birthDate}
        setFirstName={setBirthDate}
      />
      <div className={style.wrapperLabel}>
        <label htmlFor="birthDate" className={style.labelInput}>
          Country:
          <select
            name="country"
            className={errors.country ? style.inputErrorDate : '' + style.inputDate}
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            <option value="" disabled={true}>
              Select country
            </option>
            <option>Russia</option>
            <option>Belarus</option>
            <option>Ukraine</option>
          </select>
        </label>
        {errors.country && <p className={style.errorText}>{errors.country} </p>}
      </div>
      {/* <div className={style.wrapperLabel}>
        <label htmlFor="agree" className={style.labelInput}>
          I agree...
          <input
            className={errors.agree ? style.inputErrors : '' + style.input}
            type="checkbox"
            checked={agree}
            onChange={() => setAgree((prev) => !prev)}
          ></input>
        </label>
      </div> */}

      <div>
        <input type="submit" value="Send" disabled={disabledButton} />
      </div>
    </form>
  );
};
export default FormComponent;
