import axios from './api';

const getAll = async (params = {}) => {
  try {
    const { data } = await axios.get('users', { params });
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
  return [];
};

const get = async id => {
  try {
    const { data } = await axios.get(`users/${id}`);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
  return {};
};

const post = async (body = {}) => {
  try {
    const data = await axios.post('users', body);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const put = async (id, body = {}) => {
  console.log(body);
  try {
    const data = await axios.put(`users/${id}`, body);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const del = async id => {
  try {
    const data = await axios.delete(`users/${id}`);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const userApi = {
  getAll,
  get,
  post,
  put,
  del,
};

export default userApi;
