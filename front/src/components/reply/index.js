import React from 'react';
import parse from 'html-react-parser';
import EditComment from '../comment/edit';
import DeleteComment from '../comment/delete';

export default ({ article_id, setComments, reply, api }) => (
  <li>
    {parse(reply.content)}
    <EditComment
      article_id={article_id}
      setComments={setComments}
      id={reply.id}
      api={api}
      data={reply.content}
    />
    <DeleteComment
      article_id={article_id}
      setComments={setComments}
      id={reply.id}
      api={api}
    />
  </li>
);
