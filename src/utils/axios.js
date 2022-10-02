const axios = require('axios').default;

export const axiosInstance = axios.create({
    baseURL: 'http://ergast.com/api/f1/drivers.json',
    timeout: 2000,
});