
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const LogOut = ({ history }) => {

  console.log(window.localStorage.getItem('token'));
    useEffect(() => {
      window.localStorage.removeItem('token');
      history.push(`/`);
        });

  return (
    <></>
  );
};

export default withRouter(LogOut);
