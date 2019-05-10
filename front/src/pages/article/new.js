import React, { useState } from 'react';
import Wysiwyg from '../../components/Wysiwyg';
import articleApi from '../../utils/articleApi';

export default () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <>
      <input type="text" onChange={e => setTitle(e.target.value)} />
      <Wysiwyg setValue={setContent} />
      <button onClick={() => articleApi.post({ title, content })}>Submit</button>
    </>
  );
};
