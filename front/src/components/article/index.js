import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import articleApi from '../../utils/articleApi';
import { LikesNumber } from '../like';
import { CommentsNumber } from '../comment';

export const Article = ({ article }) => (
  <>
    {parse(article.title)}
    {parse(article.content)}
  </>
);

const Title = ({ article }) => (
  <>
    <Link to={`/show/article/${article.id}`}>{parse(article.title)}</Link>
    <br />
    <LikesNumber nbLikes={article.nb_likes} />
    <CommentsNumber nbComments={article.nb_comments} />
  </>
);

export default () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleApi.getAll().then(data => setArticles(data));
  }, []);

  if (!articles.length) {
    return <>Chargement des articles ...</>;
  }

  return (
    <ul>
      {articles.map(article => (
        <Title key={article.id} article={article} />
      ))}
    </ul>
  );
};
