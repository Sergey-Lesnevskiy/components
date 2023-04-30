import React from 'react';

import FormCard from '../../components/FormCard/FormCard';

import { useForm } from 'react-hook-form';
import style from './formComponent.module.css';
import { Data } from '../../types/type';
import ShowSend from '../../components/ShowSend/ShowSend';
import { useAppDispatch, useAppSelector } from '../../store/hooks/useTypedSelector';
import { addFormCard, setToggleVisiblePopup } from '../../store/Form';

function FormPage() {
  const cards = useAppSelector((state) => state.Form.cards);
  const show = useAppSelector((state) => state.Form.popup);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Data>();

  const onSubmit = (data: Data) => {
    dispatch(addFormCard(data));
    dispatch(setToggleVisiblePopup(true));

    clearShow();
    reset();
  };
  function clearShow() {
    setTimeout(() => {
      dispatch(setToggleVisiblePopup(false));
    }, 2000);
  }
  return (
    <div className={style.formContainer}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        data-testid="react-form"
        className={style.formsWrapper}
      >
        <div className={style.wrapperLabel}>
          <label htmlFor={'firstName'} className={style.labelInput}>
            FirstName:
            <input
              className={style.input}
              type="text"
              data-testid="nameTest"
              {...register('firstName', {
                required: 'Enter title',
                minLength: {
                  value: 3,
                  message: 'Title must be more than 3 characters',
                },
                maxLength: {
                  value: 15,
                  message: 'Title must be less than 15 characters',
                },
              })}
            />
          </label>
          <div className={style.errorText}>{errors.firstName?.message}</div>
        </div>
        <div className={style.wrapperLabel}>
          <label htmlFor={'Birthday'} className={style.labelInput}>
            Birthday:
            <input
              className={style.input}
              type="date"
              data-testid="birthDate"
              {...register('birthDate', { required: 'Date is required' })}
            />
          </label>
          <div className={style.errorText}>{errors.birthDate?.message}</div>
        </div>
        <div className={style.wrapperLabel}>
          <label htmlFor="country" className={style.labelInput}>
            Country:
            <select
              className={style.input}
              defaultValue=""
              data-testid={'selectTest'}
              {...register('country', { required: 'Category is required' })}
            >
              <option value=""></option>
              <option value="Russia">Russia</option>
              <option value="Belarus">Belarus</option>
              <option value="Ukraine">Ukraine</option>
              <option value="UK">UK</option>
            </select>
          </label>
          <div className={style.errorText}>{errors.country?.message}</div>
        </div>
        <div className={style.wrapperRadio}>
          <label htmlFor="field-man">
            <input
              {...register('gender', { required: 'Radio is required' })}
              type="radio"
              value="male"
              id="field-male"
            />
            Male
          </label>
          <label htmlFor="field-female">
            <input {...register('gender')} type="radio" value="female" id="field-female" />
            Female
          </label>
          <div className={style.errorText}>{errors.gender?.message}</div>
        </div>

        <div className={style.wrapperLabel}>
          <label htmlFor={'fileInput'} className={style.labelInput}>
            File:
            <input
              className={style.input}
              type="file"
              {...register('fileInput', { required: 'File is required' })}
            />
          </label>
          {errors.fileInput && <div className={style.errorText}>{errors.fileInput?.message}</div>}
        </div>

        <div className={style.wrapperLabel}>
          <label htmlFor="agree" className={style.labelInput}>
            I agree...
            <input
              value="agree"
              className={style.input}
              data-testid={'approvalTest'}
              type="checkbox"
              aria-label="checkbox"
              {...register('agree', { required: 'Check is required' })}
            />
          </label>
          {errors.agree && <div className={style.errorText}>{errors.agree?.message}</div>}
        </div>
        {show && <ShowSend text={'Ваша форма отправлена'}></ShowSend>}
        <div>
          <button className={style.buttonSubmit} type="submit" value="Send">
            Send
          </button>
        </div>
      </form>
      <div className={style.cardsBlock}>
        {cards.map((card, index) => (
          <FormCard {...card} key={index}></FormCard>
        ))}
      </div>
    </div>
  );
}

export default FormPage;
