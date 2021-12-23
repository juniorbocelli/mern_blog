import axios from 'axios';

const baseURL = "http://127.0.0.1:3000";

const axiosApi = axios.create({baseURL: baseURL, withCredentials: true});

export default axiosApi;