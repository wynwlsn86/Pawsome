import axios from 'axios';
const URL = 'http://localhost:5000';
const JWT_TOKEN = 'token';
// const JWT_TOKEN = authService.fetchToken() || "";

const api = axios.create({
  baseURL: URL,
  headers: {
    'Authorization': `Bearer ${JWT_TOKEN}`
  }
});

export const login = async(data) => {
    try{
        console.log(data);
      const resp = await api.post('/auth/login', data);
      
      console.log(resp)

      const {data: { token, user } } = resp;
      localStorage.setItem('token', token);
      return user;
    } 
    catch (e) {
      throw e.message;
    }
  };