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
    setTitle(article.title);
    setContent(article.content);
  }, [id, article.title, article.content]);

  if (Object.keys(article).length === 0) {
    return <h1>Cet article n'existe pas</h1>;
  }

  return (
    <>
      <input type="text" defaultValue={article.title} onChange={e => setTitle(e.target.value)} />
      <Wysiwyg setValue={setContent} content={article.content} />
      <button onClick={() => articleApi.put(id, { title, content })}>Submit</button>
    </>
  );
};
