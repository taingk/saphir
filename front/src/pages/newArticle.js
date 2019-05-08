import React, { useState } from 'react';
import Wysiwyg from '../components/Wysiwyg';
import axios from '../utils/api';

export default () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const postArticle = async () => {
    try {
      const article = await axios.post('articles', { title, content });
      console.log('👉 Returned data:', article);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  };

  return (
    <>
      <input type="text" onChange={e => setTitle(e.target.value)} />
      <Wysiwyg setValue={setContent} />
      <button onClick={postArticle}>Submit</button>
    </>
  );
};
