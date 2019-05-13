import React from 'react';
import EditArticle from '../../components/article/edit';

export default ({ match }) => <EditArticle id={match.params.id} />;
