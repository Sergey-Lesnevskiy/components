import { createSlice } from '@reduxjs/toolkit';
import { PersonCard } from '../types/type';

interface IState {
  cards: PersonCard[];
  popup: boolean;
}

const initialState: IState = {
  cards: [],
  popup: false,
};

export const formSlice = createSlice({
  name: 'FormCards',
  initialState,
  reducers: {
    setVisiblePopup(state, { payload }) {
      state.popup = payload;
    },
    setUnvisiblePopup(state, { payload }) {
      state.popup = payload;
    },
    addFormCard(state, { payload }) {
      const values: PersonCard = {
        firstName: payload.firstName,
        birthDate: payload.birthDate,
        fileInput: payload.fileInput,
        country: payload.country,
        agree: payload.agree,
        gender: payload.gender,
      };
      state.cards.push(values);
      localStorage.setItem('cards', JSON.stringify(state.cards));
    },
    getCardsFromLocalStorage(state) {
      const initialCards = localStorage.getItem('cards');
      if (initialCards) {
        state.cards = JSON.parse(initialCards);
      }
    },
  },
});
export const { setVisiblePopup, setUnvisiblePopup, addFormCard, getCardsFromLocalStorage } =
  formSlice.actions;
export default formSlice.reducer;
