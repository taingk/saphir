import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Wysiwyg from '../../components/Wysiwyg';
import articleApi from '../../utils/articleApi';

export const EditButton = ({ article_id }) => (
  <Link to={`/edit/article/${article_id}`}>
    <button>Edit</button>
  </Link>
);

const Edit = ({ id, history }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [article, setArticle] = useState({});
  const edit = () =>
    articleApi
      .put(id, { title, content })
      .then(({ data }) => history.push(`/show/article/${data.id}`));

  useEffect(() => {
    articleApi.get(id).then(article => {
      setArticle(article);
      setTitle(article.title);
      setContent(article.content);
    });
  }, [id, article.title, article.content]);

  if (Object.keys(article).length === 0) {
    return <h1>Cet article n'existe pas</h1>;
  }

  return (
    <>
      <input
        type="text"
        defaultValue={article.title}
        onChange={e => setTitle(e.target.value)}
      />
      <Wysiwyg setValue={setContent} content={article.content} />
      <button onClick={edit}>Submit</button>
    </>
  );
};

export default withRouter(Edit);
