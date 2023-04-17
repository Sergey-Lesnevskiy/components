import React, { Dispatch, KeyboardEvent, SetStateAction } from 'react';

export interface Props {
  state: string;
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}
export type MyState = { text: string };

export interface CardInt {
  id: number;
  title: string;
  subTitle: string;
  like: number;
  countEye: number;
}

export type CardListProps = {
  cards: CardInt[];
};

export interface PropsError {
  to: string;
}
export interface PropsForm {
  name: string;
  surName: string;
  date: string;
}

export type Data = {
  firstName: string;
  birthDate: string;
  fileInput: string;
  country: string;
  agree: boolean;
  gender: string;
};

export interface PersonCard {
  firstName: string;
  birthDate: string;
  fileInput: string;
  country: string;
  agree: string;
  gender: string;
}

export interface PropsMyInput {
  label: string;
  text: string;
  error: string;
  dirty: boolean;
  value: string;
  forTests: string;
  type: string;
  blur: Dispatch<React.FocusEvent<HTMLInputElement>>;
  setFirstName: Dispatch<React.ChangeEvent<HTMLInputElement>>;
}
export interface propsForm {
  setFormValues: Dispatch<SetStateAction<State[]>>;
}

export interface ErrorsState {
  firstName: string;
  lastName: string;
  birthDate: string;
  fileInput: string;
  country: string;
  agree: string;
  gender: string;
}
export interface State {
  firstName: string;
  lastName: string;
  birthDate: string;
  fileInput: string;
  country: string;
  agree: boolean;
  gender: string;
}
