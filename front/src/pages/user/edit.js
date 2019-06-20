import React from 'react';
import EditUser from '../../components/user/edit';

export default ({ match }) => <EditUser id={match.params.id} />;
