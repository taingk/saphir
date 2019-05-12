import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import styled from '@emotion/styled';
import articleApi from '../../utils/articleApi';
import Comments from '../../components/comment';

const Article = styled.li`
  background:${props =>
    props.default ? 'white' : '#FF9090'};
  p {
    color: white;
  }
`;

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
      <Article>{parse(`${article.title}${article.content}`)}</Article>
      <Comments article_id={id}></Comments>
    </>
  );
};
