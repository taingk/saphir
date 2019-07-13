import axios from './api';

const getAll = async (params = {}) => {
  try {
    const { data } = await axios.get('categories', { params });
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
  return [];
};

const get = async id => {
  try {
    const { data } = await axios.get(`categories/${id}`);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
  return {};
};

const post = async (body = {}) => {
  try {
    const data = await axios.post('categories', body);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const put = async (id, body = {}) => {
  console.log(body);
  try {
    const data = await axios.put(`categories/${id}`, body);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const del = async id => {
  try {
    const data = await axios.delete(`categories/${id}`);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const categoryApi = {
  getAll,
  get,
  post,
  put,
  del,
};

export default categoryApi;
