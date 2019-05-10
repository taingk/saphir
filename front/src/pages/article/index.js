import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import styled from '@emotion/styled';
import articleApi from '../../utils/articleApi';

const Article = styled.li`
  background:${props =>
    props.default ? 'white' : '#FF9090'};
  p {
    color: white;
  }
`;

export default () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleApi.getAll().then(data => setArticles(data));
  }, []);

  return (
    <>
      <h1>Articles</h1>
      <ul>
        {articles.length > 0 ?
          articles.map(article =>
            <Article key={article.id}>{parse(`${article.title}${article.content}`)}</Article>
          ) :
          <Article default>Chargement des articles ...</Article>
        }
      </ul>
    </>
  );
};
