import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../../components/Provider';
import authApi from '../../utils/authApi';

const LogIn = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const context = useContext(Context);
  const login = () =>
    authApi
      .login({ email, password })
      .then(({ data }) => context.setJWT(data.auth_token))
      .then( history.push(`/`))
      console.log(context.jwt)
      ;

  return (
    <>
      <input type="email" onChange={e => setEmail(e.target.value)}/>
      <input type="password" onChange={e => setPassword(e.target.value)}/>
      <button onClick={login}>Login</button>
    </>
  );
};

export default withRouter(LogIn);
