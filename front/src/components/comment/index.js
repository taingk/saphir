import React, { useState, useEffect } from 'react';
import commentApi from '../../utils/commentApi';

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
      <ul>
        {comments.map(comment => <>
          <li key={comment.id}>{comment.content}</li>
          {comment.nb_replies > 0 && <ul>{comment.replies.map(reply => <li>{reply.content}</li>)}</ul>}
        </>)}
      </ul>
    </>
  );
}
