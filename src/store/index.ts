import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Card from './Cards';
import Form from './Form';
import { cardsAPI } from '../services/CardsService';

const rootReducers = combineReducers({
  Card,
  Form,
  [cardsAPI.reducerPath]: cardsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(cardsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
