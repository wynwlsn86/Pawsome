import axios from 'axios';

const Base_URL = 'http://localhost:5000/users'

const api = axios.create({
    baseURL: Base_URL 
})


export const getAllUsers = async () => {
    try{
        const resp = await api.get('/');
        console.log(resp.data);
        return resp.data;
    }
    catch (e) {
        console.log(e.message);
    }
}

export const addUsers = async (data) => {
    try{
        const resp = await api.post('/', data);
        console.log(resp.data);
        return resp      
    }
    catch(e){
        console.log(e.message)
    }
}

export const putUsers = async (id, data) => {
    try{
        const resp = await api.put(`/:(${id})`, data);
        return resp.json
    }
    catch(e){
        console.log(e.message)
    }
}