const axios = require('axios').default;

export const axiosInstance = axios.create({
    baseURL: 'http://ergast.com/api/f1',
    timeout: 2000,
});