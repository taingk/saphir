import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import styled from '@emotion/styled';
import axios from '../utils/api';

const Article = styled.li`
  background:${props =>
    props.default ? 'white' : '#FF9090'};
  p {
    color: white;
  }
`;

export default () => {
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    try {
      const articles = await axios.get('articles');
      setArticles(articles.data);
      console.log('👉 Returned data:', articles);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <h1>Articles</h1>
      {articles.length > 0 ?
        articles.map(article => <Article key={article.id}>{parse(`${article.title}${article.content}`)}</Article>) :
        <Article default>Chargement des articles ...</Article>}
    </>
  );
};
