import axios from 'axios';

const Base_URL = 'http://localhost:5000/pets'

const api = axios.create({
    baseURL: Base_URL
})


export const getAllPets = async () => {
    try{
        const resp = await api.get('/');
        console.log(resp.data);
        return resp.data;
    }
    catch (e) {
        console.log(e.message);
    }
}
//
export const addPet = async (data) => {
    try{
        const resp = await api.post('/', data);
        console.log(resp.data);
        return resp
    }
    catch(e){
        console.log(e.message)
    }
}

export const putPet = async (id, data) => {
    try{
        console.log(id, 'id')
        console.log(data, 'data')
        const resp = await api.put(`/${id}`, data);
        console.log(resp.json);
        return resp.json;
    }
    catch(e){
        console.log(e.message)
    }
}

export const deletePet = async (id) => {
    try{
        const resp = await api.delete(`/${id}`);
        return console.log(resp, 'deleted');
    }
    catch (e) {
        console.log(e.message)
    }
}
