import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import authService from './authService';

interface IInitialState {
  user: IUser | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const user = JSON.parse(localStorage.getItem('user')!)

const initialState: IInitialState = {
  user: user ?? null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Register new user
export const register = createAsyncThunk('auth/register', async (user: UserWithPassword, thunkAPI) => {
  try {
    return await authService.register(user)
  } catch (error) {
    if (error instanceof AxiosError) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }

    throw error;
  }

})
export const login = createAsyncThunk('auth/login', async (user: LoginUser, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    if (error instanceof AxiosError) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }

    throw error;
  }
})

export const logout = createAsyncThunk('auth/logout', () => authService.logout())

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as any;
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.user = action.payload;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as any;
        state.user = null
      })
  }
})

export const { reset } = authSlice.actions
export default authSlice.reducer