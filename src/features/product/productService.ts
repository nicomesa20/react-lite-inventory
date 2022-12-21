import axios from 'axios'

const API_URL = `http://${import.meta.env.VITE_API_URL}/article`

const productAPI = axios.create({ baseURL: API_URL })

const getCompanyProducts = async (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await productAPI.get(`/list-articles/${id}`, config);
  return response.data
}

const createProduct = async (product: CreateProductRequest, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await productAPI.post('/create-article', product, config)
  return response.data;
}

const editProduct = async (product: Product, token: string) => {
  const { id, ...payload } = product;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await productAPI.put(`/edit-product/${id}`, payload, config)
  return response.data;
}

const deleteProduct = async (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await productAPI.delete(`delete-product/${id}`, config);
  return response.data;
}

const downloadPdf = async ({ email, id }: { email: string, id: string }, token: string) => {
  const config: any = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    responseType: 'blob',
  }

  const response: any = await productAPI.get(`export-articles/${id}/${email}`, config)
  return response.data;
}


const productService = { createProduct, editProduct, getCompanyProducts, deleteProduct, downloadPdf }

export default productService;