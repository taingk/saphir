import React from 'react';
import { withRouter } from 'react-router-dom';
import articleApi from '../../utils/articleApi';

const DeleteButton = ({ article_id, setArticle, history }) => {
  const del = () =>
    articleApi.del(article_id).then(() =>
      articleApi.getAll().then(data => {
        setArticle(data);
        history.push('/');
      })
    );

  return <button onClick={del}>Delete</button>;
};

export default withRouter(DeleteButton);
