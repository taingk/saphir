import React from 'react';
import { deleteArticle } from '../utils/api';

export default ({ match }) => {
  const { id } = match.params;

  deleteArticle(id);

  return <h1>Delete</h1>;
};
