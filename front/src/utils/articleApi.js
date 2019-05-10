import axios from './api';

const getAll = async () => {
  try {
    const { data } = await axios.get('articles');
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const get = async id => {
  try {
    const { data } = await axios.get(`articles/${id}`);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const post = async (body = {}) => {
  try {
    const article = await axios.post('articles', body);
    console.log('👉 Returned data:', article);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const put = async (id, body = {}) => {
  try {
    const article = await axios.put(`articles/${id}`, body);
    console.log('👉 Returned data:', article);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const del = async id => {
  try {
    const article = await axios.delete(`articles/${id}`);
    console.log('👉 Returned data:', article);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const articleApi = {
  getAll,
  get,
  post,
  put,
  del
};

export default articleApi;
