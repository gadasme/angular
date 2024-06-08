import { configureStore } from '@reduxjs/toolkit';

import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

export const store = configureStore({
  reducer: contadorReducer
});
store.subscribe(() => {
  console.log('Subs: ', store.getState());
});
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);