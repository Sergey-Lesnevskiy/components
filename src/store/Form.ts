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
    setToggleVisiblePopup(state, { payload }) {
      state.popup = payload;
    },
    addFormCard(state, { payload }) {
      const values: PersonCard = {
        firstName: payload.firstName,
        birthDate: payload.birthDate,
        fileInput: URL.createObjectURL((payload.fileInput as unknown as FileList)[0]),
        country: payload.country,
        agree: payload.agree,
        gender: payload.gender,
      };
      state.cards.push(values);
    },
  },
});
export const { setToggleVisiblePopup, addFormCard } = formSlice.actions;
export default formSlice.reducer;
