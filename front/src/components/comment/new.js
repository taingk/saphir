import React, { useState } from 'react';
import Wysiwyg from '../Wysiwyg';
import commentApi from '../../utils/commentApi';

export default ({ article_id, setComments }) => {
  const [content, setContent] = useState('');

  return (
    <>
      <Wysiwyg setValue={setContent} />
      <button onClick={() => commentApi.post({ content, article_id })
        .then(() => commentApi.getAll({ article_id })
        .then(comments => setComments(comments)))
      }>Submit</button>
    </>
  );
};
