import axios from 'axios'
import parseJwt from '../../utils/parseJwt'

const API_URL = 'api/users'

const userAPI = axios.create({ baseURL: API_URL })

// Register user
const register = async (userData: Omit<IUser, 'id'>) => {
  const response = await userAPI.post('', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return parseJwt(response.data)
}

// Auth user
const login = async (userData: { email: string, password: string }) => {
  const response = await userAPI.post('/login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return parseJwt(response.data)
}

const logout = () => localStorage.removeItem('user')

const authService = { register, login, logout }

export default authService;