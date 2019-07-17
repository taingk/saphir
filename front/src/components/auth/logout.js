import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const LogOut = ({ history }) => {
  useEffect(() => {
    window.localStorage.removeItem('jwt');
    history.push(`/`);
  });

  return <></>;
};

export default withRouter(LogOut);
