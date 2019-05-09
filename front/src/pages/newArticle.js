import React, { useState } from 'react';
import Wysiwyg from '../components/Wysiwyg';
import { postArticle } from '../utils/api';

export default () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <>
      <input type="text" onChange={e => setTitle(e.target.value)} />
      <Wysiwyg setValue={setContent} />
      <button onClick={() => postArticle(title, content)}>Submit</button>
    </>
  );
};
