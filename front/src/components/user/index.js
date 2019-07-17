import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import userApi from '../../utils/userApi';

export const User = ({ user }) => (
  <>
    {parse(user.pseudo)}
    {parse(user.email)}
    {parse(user.role)}
  </>
);

const Title = ({ user }) => (
  <>
    <Link to={`/show/users/${user.id}`}>{parse(user.pseudo)}</Link>
  </>
);

export default () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userApi.getAll().then(data => setUsers(data));
  }, []);

  if (!users.length) {
    return <>Chargement des utilisateurs ...</>;
  }

  return (
    <ul>
      {users.map(user => (
        <Title key={user.id} user={user} />
      ))}
    </ul>
  );
};
