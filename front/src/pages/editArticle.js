import React, { useState, useEffect } from 'react';
import Wysiwyg from '../components/Wysiwyg';
import { getArticle, putArticle } from '../utils/api';

export default ({ match }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [article, setArticle] = useState({});
  const { id } = match.params;

  useEffect(() => {
    getArticle(id).then(article => setArticle(article));
  }, []);

  return (
    <>
      <input type="text" defaultValue={article.title} onChange={e => setTitle(e.target.value)} />
      <Wysiwyg setValue={setContent} content={article.content} />
      <button onClick={() => putArticle(id, title, content)}>Submit</button>
    </>
  );
};
