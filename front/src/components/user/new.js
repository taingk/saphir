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
      <input type="text" onChange={e => setUsername(e.target.value)} />
      <input type="email" onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={post}>S'inscrire</button>
    </>
  );
};

export default withRouter(NewUser);
