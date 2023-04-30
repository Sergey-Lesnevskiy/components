import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import Card from './Cards';
import Form from './Form';
import { cardsAPI } from '../services/CardsService';

const rootReducers = combineReducers({
  Card,
  Form,
  [cardsAPI.reducerPath]: cardsAPI.reducer,
});

export const store = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducers,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(cardsAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
