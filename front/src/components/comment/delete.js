import React from 'react';
import commentApi from '../../utils/commentApi';

export default ({article_id, setComments, id, entity}) => {
  const del = () => entity.del(id)
    .then(() => commentApi.getAll({ article_id })
    .then(comments => setComments(comments)));

  return (
    <button onClick={del}>Delete</button>
  );
};
