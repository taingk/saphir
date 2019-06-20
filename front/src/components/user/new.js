import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import userApi from '../../utils/userApi';

const NewUser = ({ history }) => {
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password_digest, setPassword] = useState('');
  const [role, setRole] = useState('');
  const add = () =>
    userApi
      .post({ pseudo, email, password_digest, role })
      .then(({ data }) => history.push(`/show/user/${data.id}`));

  return (
    <>
      <input type="text" onChange={e => setTitle(e.target.value)} />
      <input type="text" onChange={e => setEmail(e.target.value)} />
      <input type="text" onChange={e => setPassword(e.target.value)} />
      <input type="text" onChange={e => setRole(e.target.value)} />
      
      <button onClick={add}>Créer</button>
    </>
  );
};

export default withRouter(NewUser);