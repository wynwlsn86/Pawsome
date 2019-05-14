import axios from 'axios';

const Base_URL = 'http://localhost:5000/volunteer'

const api = axios.create({
    baseURL: Base_URL 
})


export const getAllVolunteers= async () => {
    try{
        const resp = await api.get('/');
        console.log(resp.json);
        return resp.json;
    }
    catch (e) {
        console.log(e.message);
    }
}

export const getOneVolunteer = async (id) => {
    try{
        const resp = await api.get(`/:${id}`);
        return resp.json;
    }
    catch (e) {
        console.log(e.message);
    }
}

export const addVolunteer = async (data) => {
    try{
        const resp = await api.post('/', data);
        console.log(resp);
        return resp.json;      
    }
    catch(e){
        console.log(e.message)
    }
}

export const updateVolunteer = async (id, data) => {
    try{
        const selecteduser = await Volunteer.findByPk({id});
        console.log(selectedPet)
        const resp = await api.put('/:(id)', data);
        return resp.json
    }
    catch(e){
        console.log(e.message)
    }
}