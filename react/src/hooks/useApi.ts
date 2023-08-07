import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/auth/validateToken', {token}) 
        return response.data;
    },
    authenticate: async (email: string, password: string) => {
        const response = await api.post('/auth/authenticate', {email, password}) 
        return response.data;
    },
    unauthenticate: async () => {

    }
})