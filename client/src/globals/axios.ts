import axios from 'axios';

const baseURL = "http://localhost:5000";

const axiosApi = axios.create({ baseURL: baseURL, withCredentials: false });

export default axiosApi;