import axios from 'axios';

export const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function get(){
  const response = axios.get(`${BASE_URL}/options`);
  return response;
}

async function register(body) {
  await axios.post(`${BASE_URL}/register`, body);
}

async function login(body) {
  const response = await axios.post(`${BASE_URL}/login`, body);
  return response;
}

async function postOrder(body, token){
  const config = createConfig(token);
  const response = await axios.post(`${BASE_URL}/order`, body, config);

  return response;
}

export const api = {
  get,
  register,
  login,
  postOrder
}