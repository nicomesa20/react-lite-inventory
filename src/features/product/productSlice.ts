import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import productService from './productService';
import { saveAs } from 'file-saver'

interface IInitialState {
  products: Product[];
  product?: Product;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
const initialState: IInitialState = {
  products: [],
  product: undefined,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Get tickets
export const getProducts = createAsyncThunk('products/getAll', async (id: string, thunkAPI: any) => {
  try {
    const token: string = thunkAPI.getState().auth.user.token
    return await productService.getCompanyProducts(id, token)
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


export const createProduct = createAsyncThunk('products/createProduct', async (value: CreateProductRequest, thunkAPI: any) => {
  try {
    const token: string = thunkAPI.getState().auth.user.token
    return await productService.createProduct(value, token)
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

export const downloadPdf = createAsyncThunk('products/downloadPdf', async (value: any, thunkAPI: any) => {
  try {
    const token: string = thunkAPI.getState().auth.user.token
    const response = await productService.downloadPdf(value, token)
    saveAs(response, `report-${value.id}.pdf`)
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

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as any;
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as any;
      })
      .addCase(downloadPdf.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(downloadPdf.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(downloadPdf.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as any;
      })
  }
})

export const { reset } = productSlice.actions
export default productSlice.reducer