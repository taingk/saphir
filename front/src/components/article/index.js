import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import parse from 'html-react-parser';
import articleApi from '../../utils/articleApi';

const StyledArticle = styled.li`
  background:${props =>
    props.default ? 'white' : '#FF9090'};
  p {
    color: white;
  }
`;

export const Article = ({ article }) => (
  <StyledArticle>
    <Link to={`/show/article/${article.id}`}>
      {parse(article.title)}
    </Link>
    {parse(article.content)}
  </StyledArticle>
);

export default () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleApi.getAll().then(data => setArticles(data));
  }, []);

  if (!articles.length) {
    return <StyledArticle default>Chargement des articles ...</StyledArticle>
  }

  return <ul>{articles.map(article => <Article key={article.id} article={article}></Article>)}</ul>
};
