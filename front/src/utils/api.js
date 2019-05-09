import axios from 'axios';

const axiosCall = axios.create({
  baseURL: 'http://localhost:3000/',
  responseType: 'json'
});

export default axiosCall;

export const getArticles = async () => {
  try {
    const { data } = await axiosCall.get('articles');
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

export const getArticle = async id => {
  try {
    const { data } = await axiosCall.get(`articles/${id}`);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

export const postArticle = async (title, content) => {
  try {
    const article = await axiosCall.post('articles', { title, content });
    console.log('👉 Returned data:', article);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

export const putArticle = async (id, title, content) => {
  try {
    const article = await axiosCall.put(`articles/${id}`, { title, content });
    console.log('👉 Returned data:', article);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

export const deleteArticle = async id => {
  try {
    const article = await axiosCall.delete(`articles/${id}`);
    console.log('👉 Returned data:', article);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};
