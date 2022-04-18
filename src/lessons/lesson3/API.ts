import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '96696f0d';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
return axiosInstance.get(`/?t=${title}&apikey=96696f0d`)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
