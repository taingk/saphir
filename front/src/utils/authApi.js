import axios from './api';

const login = async ( body = {}) => {
  try {
    const data = await axios.post(`authenticate`, body);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const authApi = {
  login,
};

export default authApi;
