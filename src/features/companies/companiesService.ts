import axios from 'axios'

const API_URL = `http://${import.meta.env.VITE_API_URL}/company`

const companyAPI = axios.create({ baseURL: API_URL })

const getCompanies = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await companyAPI.get('/list-companies', config);
  return response.data
}

const createCompany = async (company: Company, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await companyAPI.post('/create-company', company, config)
  return response.data;
}

const editCompany = async (company: Company, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await companyAPI.put(`/edit-company/${company.id}`, company, config)
  return response.data;
}

const deleteCompany = async (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await companyAPI.delete(`remove-company/${id}`, config);
  return response.data;
}


const companyService = { getCompanies, createCompany, deleteCompany, editCompany }

export default companyService;