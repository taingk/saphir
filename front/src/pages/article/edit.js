import React, { useState, useEffect } from 'react';
import Wysiwyg from '../../components/Wysiwyg';
import articleApi from '../../utils/articleApi';

export default ({ match }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [article, setArticle] = useState({});
  const { id } = match.params;

  useEffect(() => {
    articleApi.get(id).then(article => setArticle(article));
  }, []);

  return (
    <>
      <input type="text" defaultValue={article.title} onChange={e => setTitle(e.target.value)} />
      <Wysiwyg setValue={setContent} content={article.content} />
      <button onClick={() => articleApi.put(id, { title, content })}>Submit</button>
    </>
  );
};
