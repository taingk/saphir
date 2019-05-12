import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import commentApi from '../../utils/commentApi';
import NewComment from './new';

export default ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentApi.getAll({ article_id }).then(comments => setComments(comments));
  }, [article_id]);

  if (!comments.length) {
    return null
  }

  return (
    <>
      <h1>Commentaires</h1>
      <NewComment article_id={article_id} />
      <ul>
        {comments.map(comment => <>
          <li key={comment.id}>{parse(comment.content)}</li>
          {comment.nb_replies > 0 &&
            <ul>{comment.replies.map(reply => <li key={reply.id}>{parse(reply.content)}</li>)}</ul>}
        </>)}
      </ul>
    </>
  );
}
