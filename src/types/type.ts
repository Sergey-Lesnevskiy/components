export interface Props {
  state: string;
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
export interface PersonCard {
  name: string;
  surName: string;
  date: string;
  file: string;
  city: string;
  approval: string;
  male: string;
}
export interface StateForm {
  errors: {
    firstNameInput: string;
    lastNameInput: string;
    dateInput: string;
    fileInput: string;
    cityInput: string;
    approvalInput: string;
    maleInput: string;
  };
  disabledButton: boolean;
  arrayCards: PersonCard[];
}
