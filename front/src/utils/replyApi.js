import axios from './api';

const getAll = async (params = {}) => {
  try {
    const { data } = await axios.get('replies', { params });
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
  return [];
};

const get = async id => {
  try {
    const { data } = await axios.get(`replies/${id}`);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
  return {};
};

const post = async (body = {}) => {
  try {
    const data = await axios.post('replies', body);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const put = async (id, body = {}) => {
  console.log(body);
  try {
    const data = await axios.put(`replies/${id}`, body);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const del = async id => {
  try {
    const data = await axios.delete(`replies/${id}`);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const replyApi = {
  getAll,
  get,
  post,
  put,
  del,
};

export default replyApi;
