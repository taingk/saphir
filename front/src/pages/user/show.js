import React, { useState, useEffect } from 'react';
import userApi from '../../utils/userApi';
import { User } from '../../components/user';
import { EditButton } from '../../components/user/edit';
import DeleteUser from '../../components/user/delete';

export default ({ match }) => {
  const [user, setUser] = useState({});
  const { id } = match.params;

  useEffect(() => {
    userApi.get(id).then(data => setUser(data));
  }, [id]);

  if (Object.keys(user).length === 0) {
    return <h1>Cet utilisateur n'existe pas</h1>;
  }

  return (
    <>
      <User user={user} />
      <EditButton user_id={id} />
      <DeleteUser user_id={id} setuser={setUser} />
    </>
  );
};
