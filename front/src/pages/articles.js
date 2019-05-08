import React, { useState, useEffect } from 'react';
import axios from '../utils/api';

export default () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const articles = await axios.get('articles');
        setArticles(articles.data);
        console.log('👉 Returned data:', articles);
      } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
      }
    }
    getArticles();
  }, []);

  return (
    <>
      <h1>Articles</h1>
      {articles.map(article => article.content)}
    </>
  );
};
