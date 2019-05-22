import axios from './api';

const getAll = async (params = {}) => {
  try {
    const { data } = await axios.get('comments', { params });
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
  return [];
};

const get = async id => {
  try {
    const { data } = await axios.get(`comments/${id}`);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
  return {};
};

const post = async (body = {}) => {
  try {
    const data = await axios.post('comments', body);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const put = async (id, body = {}) => {
  try {
    const data = await axios.put(`comments/${id}`, body);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const del = async id => {
  try {
    const data = await axios.delete(`comments/${id}`);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const commentApi = {
  getAll,
  get,
  post,
  put,
  del,
};

export default commentApi;
