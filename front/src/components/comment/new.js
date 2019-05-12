import React, { useState } from 'react';
import Wysiwyg from '../Wysiwyg';
import commentApi from '../../utils/commentApi';

export default ({ article_id }) => {
  const [content, setContent] = useState('');

  return (
    <>
      <Wysiwyg setValue={setContent} />
      <button onClick={() => commentApi.post({ content, article_id })}>Submit</button>
    </>
  );
};
