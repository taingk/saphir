import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import styled from '@emotion/styled';
import { getArticle } from '../utils/api';

const Article = styled.li`
  background:${props =>
    props.default ? 'white' : '#FF9090'};
  p {
    color: white;
  }
`;

export default ({ match }) => {
  const [article, setArticle] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    getArticle(id).then(data => setArticle(data));
  }, []);

  return (
    <>
      <h1>Articles</h1>
      <ul>
        <Article>{parse(`${article.title}${article.content}`)}</Article>
      </ul>
    </>
  );
};
