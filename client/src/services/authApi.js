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
        console.log(data, 'data sent');
      const resp = await api.post('/auth/login', data);
      const {data: { token, user } } = resp;
      localStorage.setItem('token', token);
      console.log(user);
      return user;
    } 
    catch (e) {
      throw e.message;
    }
  };