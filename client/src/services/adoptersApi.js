import axios from 'axios';

const Base_URL = 'http://localhost:5000/adopters'

const api = axios.create({
    baseURL: Base_URL
})


export const addAdopter = async (data) => {
    try{
        const resp = await api.post('/', data);
        return resp
    }
    catch(e){
        console.log(e.message)
    }
}