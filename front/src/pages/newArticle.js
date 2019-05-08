import React, { useState } from 'react';
import Wysiwyg from '../components/Wysiwyg';
import axios from '../utils/api';

export default () => {
  const [content, setContent] = useState('');
  const postArticle = async () => {
    try {
      const article = await axios.post('articles', { title: 'test', content });
      console.log('👉 Returned data:', article);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  };

  return (
    <>
      <Wysiwyg setContent={setContent} />
      <button onClick={postArticle}>Submit</button>
    </>
  );
};
