import React from 'react';
import { withRouter } from 'react-router-dom';
import userApi from '../../utils/userApi';

const DeleteButton = ({ user_id, setUser, history }) => {
  const del = () =>
    userApi.del(user_id).then(() =>
      userApi.getAll().then(data => {
        setUser(data);
        history.push('/');
      })
    );

  return <button onClick={del}>Supprimer</button>;
};

export default withRouter(DeleteButton);
