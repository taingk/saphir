import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import userApi from '../../utils/userApi';

const NewUser = ({ history }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const post = () =>
    userApi.post({ username, email, password }).then(history.push(`/`));
  return (
    <>
      <label>Nom d'utilisateur</label>
      <input type="text" onChange={e => setUsername(e.target.value)} />
      <br />
      <label>E-mail</label>
      <input type="email" onChange={e => setEmail(e.target.value)} />
      <br />
      <label>Mot de passe</label>
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={post}>S'inscrire</button>
    </>
  );
};

export default withRouter(NewUser);
