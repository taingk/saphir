import React, { useState, useEffect } from 'react';
import articleApi from '../../utils/articleApi';
import { Article } from '../../components/article';
import { EditButton } from '../../components/article/edit';
import DeleteArticle from '../../components/article/delete';
import Comments from '../../components/comment';
import Like from '../../components/like';

export default ({ match }) => {
  const [article, setArticle] = useState({});
  const { id } = match.params;

  useEffect(() => {
    articleApi.get(id).then(data => setArticle(data));
  }, [id]);

  if (Object.keys(article).length === 0) {
    return <h1>Cet article n'existe pas</h1>;
  }

  return (
    <>
      <Article article={article} />
      <Like article={article} />
      <EditButton article_id={id} />
      <DeleteArticle article_id={id} setArticle={setArticle} />
      <Comments article_id={id} />
    </>
  );
};
