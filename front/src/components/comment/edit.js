import React, { useState } from 'react';
import commentApi from '../../utils/commentApi';
import Wysiwyg from '../Wysiwyg';

export default ({ article_id, setComments, id, api, data }) => {
  const [mode, setMode] = useState('read');
  const [content, setContent] = useState(data);
  const changeMode = () => {
    mode === 'read' ? setMode('edit') : setMode('read');
  };
  const put = () => {
    api
      .put(id, { content })
      .then(() =>
        commentApi
          .getAll({ article_id })
          .then(comments => setComments(comments))
      );
    setMode('read');
  };

  return (
    <>
      <button onClick={changeMode}>Edit</button>
      {mode === 'edit' && (
        <>
          <Wysiwyg setValue={setContent} content={data} />
          <button onClick={put}>Submit</button>
        </>
      )}
    </>
  );
};
