import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Wysiwyg from '../../components/Wysiwyg';
import articleApi from '../../utils/articleApi';

const NewArticle = ({ history }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const add = () =>
    articleApi
      .post({ title, content })
      .then(({ data }) => history.push(`/show/article/${data.id}`));

  return (
    <>
      <input type="text" onChange={e => setTitle(e.target.value)} />
      <Wysiwyg setValue={setContent} />
      <button onClick={add}>Submit</button>
    </>
  );
};

export default withRouter(NewArticle);
