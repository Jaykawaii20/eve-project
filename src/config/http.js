import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

async function send(type, url, data, config) {
  const response = await httpClient[type](url, type === 'get' || type === 'delete' ? config : data, config);
  return response.data;
}

function get(url, config) {
  return send('get', url, {}, config);
}

function post(url, data, config) {
  return send('post', url, data, config);
}

function put(url, data, config) {
  return send('put', url, data, config);
}

function patch(url, data, config) {
  return send('patch', url, data, config);
}

function remove(url, config) {
  return send('delete', url, {}, config);
}

const http = {
  get,
  post,
  put,
  patch,
  delete: remove,
};

export { http, httpClient };
