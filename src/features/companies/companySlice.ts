import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import companyService from './companiesService';

interface IInitialState {
  companies: Company[];
  company?: Company;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
const initialState: IInitialState = {
  companies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Get tickets
export const getCompanies = createAsyncThunk('companies/getAll', async (_, thunkAPI: any) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await companyService.getCompanies(token)
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


export const createCompany = createAsyncThunk('companies/createCompany', async (value: Company, thunkAPI: any) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await companyService.createCompany(value, token)
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

export const deleteCompany = createAsyncThunk('companies/deleteCompany', async (id: string, thunkAPI: any) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    companyService.deleteCompany(id, token)
    return id
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

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    reset: (state) => initialState,
    selectCompany: (state, action) => state.company = { ...action.payload }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCompanies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCompanies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.companies = action.payload;
      })
      .addCase(getCompanies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as any;
      })
      .addCase(createCompany.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createCompany.rejected, (state, action) => {
        state.isLoading = true;
        state.isError = true;
        state.message = action.payload as any;
      })
      .addCase(deleteCompany.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.companies = state.companies.filter((company: Company) => company.id !== action.payload)
      })
      .addCase(deleteCompany.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as any;
      })
  }
})

export const { reset, selectCompany } = companySlice.actions
export default companySlice.reducer