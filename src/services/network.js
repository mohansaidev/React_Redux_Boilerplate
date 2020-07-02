import axios from 'axios';

const get = (endpoint: string, params?: {}) => axios.get(`${endpoint}`, params);

const post = (endpoint: string, body: {}, params?: {}) => axios.post(`${endpoint}`, body, params);

const put = (endpoint: string, body: {}|{}[], params?: {}) => axios.put(`${endpoint}`, body, params);

const del = (endpoint: string, body: {}, params?: {}) => axios.delete(`${endpoint}`, body, params);

const network = {
  get, post, put, del,
};

export default network;
