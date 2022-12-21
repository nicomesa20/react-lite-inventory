import axios from 'axios'
import parseJwt from '../../utils/parseJwt'

const API_URL = `http://${import.meta.env.VITE_API_URL}/auth`

const userAPI = axios.create({ baseURL: API_URL })

// Register user
const register = async (userData: Omit<IUser, 'id'>) => {
  await userAPI.post('/register-external', userData)
}

// Auth user
const login = async (userData: { email: string, password: string }) => {

  const { email, ...rest } = userData;

  const payload = { username: email, ...rest }
  const response = await userAPI.post('/login', payload)

  const user = parseJwt(response.data.accessToken)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(user))
  }
  return user
}

const logout = () => localStorage.removeItem('user')

const authService = { register, login, logout }

export default authService;