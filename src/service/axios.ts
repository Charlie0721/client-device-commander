import axios, { AxiosInstance } from "axios";
import {irApi} from './environmentVariables'
const axiosIntance: AxiosInstance = axios.create({

    baseURL: irApi,
    headers: {
        'Content-Type': 'application/json',

    },
});

export default axiosIntance