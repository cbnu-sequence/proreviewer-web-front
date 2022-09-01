import axios, { AxiosInstance } from 'axios';

const client: AxiosInstance = axios.create();

client.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export default client;
