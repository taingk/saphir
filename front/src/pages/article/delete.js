import React from 'react';
import articleApi from '../../utils/articleApi';

export default ({ match }) => {
  const { id } = match.params;

  articleApi.del(id);

  return <h1>Delete</h1>;
};
