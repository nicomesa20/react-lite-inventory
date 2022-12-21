import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { authReducer } from '../features/auth';
import { companyReducer } from '../features/companies';
import { productReducer } from '../features/product';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    company: companyReducer,
    products: productReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
