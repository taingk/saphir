
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const LogOut = ({ history }) => {

    useEffect(() => {
        sessionStorage.removeItem('token').history.push(`/`);
        });

  return (
    <></>
  );
};

export default withRouter(LogOut);
