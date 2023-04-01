import MyInput from '../../components/MyInput/MyInput';
import React, { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';
import style from './formComponent.module.css';
import ShowSend from '../../components/ShowSend/ShowSend';

interface propsForm {
  setFormValues: Dispatch<SetStateAction<State[]>>;
}

interface ErrorsState {
  firstName: string;
  lastName: string;
  birthDate: string;
  fileInput: string;
  country: string;
  agree: string;
  gender: string;
}
interface State {
  firstName: string;
  lastName: string;
  birthDate: string;
  fileInput: string;
  country: string;
  agree: boolean;
  gender: string;
}
const FormComponent = function FormComponent({ setFormValues }: propsForm) {
  const [disabledButton, setDisabledButton] = useState(false);
  const [fileInput, setFileInput] = useState('');
  const [fileName, setFileName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('');
  const [dirty, setDirty] = useState({
    firstName: false,
    lastName: false,
    birthDate: false,
    country: false,
    agree: false,
    gender: false,
    fileInput: false,
  });

  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState('');
  const [show, setShow] = useState('');
  const [errors, setErrors] = useState<ErrorsState>({
    firstName: 'Input Name',
    lastName: 'Input surname',
    birthDate: 'You need to change birthday',
    fileInput: 'You need to change file',
    country: 'You need to change country',
    agree: '',
    gender: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (disabledButton) {
      setFormValues((state) => [
        ...state,
        { firstName, lastName, birthDate, country, agree, gender, fileInput },
      ]);
      reset();
      setShow('Your data is send');
      clearShow();
    }
  };

  function clearShow() {
    setTimeout(() => {
      setShow('');
    }, 2000);
  }

  const reset = () => {
    setAgree(false);
    setCountry('');
    setFirstName('');
    setLastName('');
    setBirthDate('');
    setGender('');
    setFileInput('');
    setFileName('');
  };
  const blurHandler = (e: React.FocusEvent<HTMLSelectElement | HTMLInputElement>) => {
    const event = e.target as HTMLInputElement | HTMLSelectElement;
    switch (event?.name) {
      case 'country':
        setDirty((state) => ({ ...state, country: true }));
        break;
      case 'firstName':
        setDirty((state) => ({ ...state, firstName: true }));
        break;
      case 'lastName':
        setDirty((state) => ({ ...state, lastName: true }));
        break;
      case 'birthDate':
        setDirty((state) => ({ ...state, birthDate: true }));
        break;
      case 'fileInput':
        setDirty((state) => ({ ...state, fileInput: true }));
        break;
    }
  };
  const countryHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setCountry(e.target.value);
    if (!e.target.value.length) {
      setErrors((state) => ({ ...state, country: 'You need change' }));
    } else {
      setErrors((state) => ({ ...state, country: '' }));
    }
  };

  const fistNameHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFirstName(e.target.value);
    if (!e.target.value.length) {
      setErrors((state) => ({ ...state, firstName: 'FirstName should be fill' }));
    } else {
      if (!/^[a-zA-Zа-яА-Я]+$/.test(e.target.value)) {
        setErrors((state) => ({ ...state, firstName: 'The first name must contain only letters' }));
        return;
      } else if (e.target.value.length < 2) {
        setErrors((state) => ({
          ...state,
          firstName: 'The first name must be more then 1 letter',
        }));
        return;
      }
      setErrors((state) => ({ ...state, firstName: '' }));
    }
  };
  const lastNameHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setLastName(e.target.value);
    if (!e.target.value.length) {
      setErrors((state) => ({ ...state, lastName: 'Please enter your last name' }));
    } else {
      if (!/^[a-zA-Zа-яА-Я]+$/.test(e.target.value)) {
        setErrors((state) => ({ ...state, lastName: 'The last name must contain only letters' }));
        return;
      } else if (e.target.value.length < 2) {
        setErrors((state) => ({
          ...state,
          lastName: 'The first name must be more then 1 letter',
        }));
        return;
      }
      setErrors((state) => ({ ...state, lastName: '' }));
    }
  };
  const birthDateHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setBirthDate(e.target.value);
    if (!e.target.value.length) {
      setErrors((state) => ({ ...state, birthDate: 'Please enter your date' }));
    } else {
      setErrors((state) => ({ ...state, birthDate: '' }));
    }
  };
  const agreeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
    if (!e.target.checked) {
      setErrors((state) => ({ ...state, agree: 'You need to agree to data processing' }));
    } else {
      setErrors((state) => ({ ...state, agree: '' }));
    }
  };
  const femaleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
    if (!e.target.value.length) {
      setErrors((state) => ({ ...state, gender: 'You need to change gender' }));
    } else {
      setErrors((state) => ({ ...state, gender: '' }));
    }
  };
  const fileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileInput(URL.createObjectURL(e.target.files[0]));
    }
    setFileName(e.target.value);
    // else {
    // setFileInput(e.target.value);
    // }
    if (!e.target.value.length) {
      setErrors((state) => ({ ...state, fileInput: 'You need to change gender' }));
    } else {
      setErrors((state) => ({ ...state, fileInput: '' }));
    }
  };

  useEffect(() => {
    if (
      errors.country ||
      errors.firstName ||
      errors.lastName ||
      errors.birthDate ||
      errors.agree ||
      errors.gender ||
      errors.fileInput ||
      !gender ||
      !agree
    ) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [
    errors.country,
    errors.firstName,
    errors.lastName,
    errors.birthDate,
    errors.agree,
    errors.gender,
    errors.fileInput,
    gender,
    agree,
  ]);
  return (
    <form className={style.formsWrapper} onSubmit={handleSubmit}>
      <MyInput
        label="firstName"
        text="Name:"
        type="text"
        forTests="nameTest"
        blur={blurHandler}
        error={errors.firstName}
        dirty={dirty.firstName}
        value={firstName}
        setFirstName={fistNameHandler}
      />
      <MyInput
        label="lastName"
        type="text"
        text="Surname:"
        forTests="lastNameTest"
        blur={blurHandler}
        dirty={dirty.lastName}
        error={errors.lastName}
        value={lastName}
        setFirstName={lastNameHandler}
      />
      <MyInput
        label="birthDate"
        type="date"
        text="Birthday:"
        forTests="birthDate"
        blur={blurHandler}
        dirty={dirty.birthDate}
        error={errors.birthDate}
        value={birthDate}
        setFirstName={birthDateHandler}
      />
      <MyInput
        label="fileInput"
        type="file"
        text="Upload file:"
        forTests="fileInput"
        blur={blurHandler}
        dirty={dirty.fileInput}
        error={errors.fileInput}
        value={fileName}
        setFirstName={fileInputHandler}
      />

      <div className={style.wrapperLabel}>
        <label htmlFor="country" className={style.labelInput}>
          Country:
          <select
            onBlur={(e) => blurHandler(e)}
            name="country"
            className={errors.country ? style.inputErrorDate : '' + style.inputDate}
            value={country}
            onChange={(event) => countryHandler(event)}
          >
            <option value="" disabled={true}>
              Select country
            </option>
            <option>Russia</option>
            <option>Belarus</option>
            <option>Ukraine</option>
          </select>
        </label>
        {dirty.country && errors.country && <p className={style.errorText}>{errors.country} </p>}
      </div>

      <div className={style.wrapperLabel}>
        <label htmlFor="agree" className={style.labelInput}>
          I agree...
          <input
            data-testid={'approvalTest'}
            className={errors.agree ? style.inputErrors : '' + style.input}
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={(e) => agreeHandler(e)}
          ></input>
        </label>
        {errors.agree && <p className={style.errorText}>{errors.agree} </p>}
      </div>

      <div className={style.wrapperLabel}>
        <div className={style.wrapperRadio}>
          <div className={style.radio}>
            <input
              checked={gender === 'man'}
              value="man"
              onChange={(e) => femaleHandler(e)}
              type="radio"
              id="radioMan"
              className={style.radioInput}
              name="male"
            />
            <label htmlFor="radioMan" className={style.radioLabel}>
              man
            </label>
          </div>
          <div className={style.radio}>
            <input
              checked={gender === 'woman'}
              value="woman"
              onChange={(e) => femaleHandler(e)}
              type="radio"
              id="radioWoman"
              name="male"
              className={style.radioInput}
            />
            <label htmlFor="radioWoman" className={style.radioLabel}>
              woman
            </label>
          </div>
        </div>
        {errors.gender && <p className={style.errorText}>{errors.gender} </p>}
      </div>
      {show && <ShowSend text={show}></ShowSend>}
      <div>
        <button type="submit" value="Send" disabled={!disabledButton}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default FormComponent;
