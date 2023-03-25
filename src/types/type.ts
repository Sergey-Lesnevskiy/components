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
