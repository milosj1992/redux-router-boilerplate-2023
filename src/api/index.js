import axios from 'axios';

export const apiRents = axios.create({
    baseURL: 'https://633fb6ebd1fcddf69ca807e1.mockapi.io/api/table-chart',
});

export const login = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});
