import React, { useState } from 'react';
import likeApi from '../../utils/likeApi';

export const LikesNumber = ({ nbLikes }) => (
  <span>
    {nbLikes} Like
    {nbLikes > 1 ? 's' : null}
  </span>
);

export default ({ article }) => {
  const [nbLikes, setNbLikes] = useState(article.nb_likes);
  const post = () =>
    likeApi
      .post({ article_id: article.id })
      .then(() => setNbLikes(nbLikes + 1));

  return (
    <>
      <LikesNumber nbLikes={nbLikes} />
      <button onClick={post}>Like</button>
    </>
  );
};
