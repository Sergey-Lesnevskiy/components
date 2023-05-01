/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface IState {
  searchValue: string;
}

const initialState: IState = {
  searchValue: '',
};

export const cardsSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setSearchValue(state, { payload }) {
      state.searchValue = payload;
    },
  },
});
export const { setSearchValue } = cardsSlice.actions;
export default cardsSlice.reducer;
