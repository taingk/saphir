import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import userApi from '../../utils/userApi';

export const EditButton = ({ user_id }) => (
  <Link to={`/edit/user/${user_id}`}>
    <button>Edit</button>
  </Link>
);

const Edit = ({ id, history }) => {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password_digest, setPassword] = useState('');
    const [role, setRole] = useState('');
  const edit = () =>
    userApi
      .put(id, { pseudo, email, password_digest, role })
      .then(({ data }) => history.push(`/show/user/${data.id}`));

  useEffect(() => {
    userApi.get(id).then(user => {
      setPseudo(user.pseudo);
      setEmail(user.email);
      setPassword(user.password_digest);
      setRole(user.role);
    });
  }, [id, user.pseudo, user.email, user.password_digest, user.role]);

  if (Object.keys(user).length === 0) {
    return <h1>Cet utilisateur n'existe pas</h1>;
  }

  return (
    <>
      <input
        type="text"
        defaultValue={user.pseudo}
        onChange={e => setPseudo(e.target.value)}
      />
      <input
        type="text"
        defaultValue={user.email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        defaultValue={user.password_digest}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="text"
        defaultValue={user.role}
        onChange={e => setRole(e.target.value)}
      />
      <button onClick={edit}>Editer</button>
    </>
  );
};

export default withRouter(Edit);
