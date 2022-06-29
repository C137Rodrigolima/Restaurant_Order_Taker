import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_BASE_URL;


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

async function AdmLogin(body) {
  const response = await axios.post(`${BASE_URL}/adm/login`, body);
  return response;
}

async function postOrder(body, token){
  const config = createConfig(token);
  const response = await axios.post(`${BASE_URL}/order`, body, config);

  return response;
}

async function getOrder(token){
  const config = createConfig(token);
  const response = await axios.get(`${BASE_URL}/order/client`, config);

  return response;
}

async function getAllOrders(token){
  const config = createConfig(token);
  const response = await axios.get(`${BASE_URL}/order/adm`, config);

  return response;
}

export const api = {
  get,
  register,
  login,
  AdmLogin,
  postOrder,
  getOrder,
  getAllOrders
}