import React, { useState } from 'react';
import Wysiwyg from '../Wysiwyg';
import commentApi from '../../utils/commentApi';
import replyApi from '../../utils/replyApi';

export default ({ article_id, setComments, comment_id }) => {
  const [mode, setMode] = useState('read');
  const [content, setContent] = useState('');
  const changeMode = () => {
    mode === 'read' ? setMode('reply') : setMode('read');
  };
  const add = () => {
    replyApi
      .post({ content, comment_id })
      .then(() =>
        commentApi
          .getAll({ article_id })
          .then(comments => setComments(comments))
      );
    setMode('read');
  };

  return (
    <>
      <button onClick={changeMode}>Reply</button>
      {mode === 'reply' && (
        <>
          <Wysiwyg setValue={setContent} />
          <button onClick={add}>Submit</button>
        </>
      )}
    </>
  );
};
