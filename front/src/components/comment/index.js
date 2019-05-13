import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import commentApi from '../../utils/commentApi';
import replyApi from '../../utils/replyApi';
import NewComment from './new';
import NewReply from './newReply';
import EditComment from './edit';
import DeleteComment from './delete';

export default ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentApi.getAll({ article_id }).then(comments => setComments(comments));
  }, [article_id]);

  if (!comments.length) {
    return (
      <>
        <h1>Commentaires</h1>
        <NewComment article_id={article_id} setComments={setComments} />
        <p>Il n'y a pas de commentaire.</p>
      </>
    );
  }

  return (
    <>
      <h1>Commentaires</h1>
      <NewComment article_id={article_id} setComments={setComments} />
      <ul>
        {comments.map(comment => <>
          <li key={comment.id}>
            {parse(comment.content)}
            <NewReply article_id={article_id} setComments={setComments} comment_id={comment.id} />
            <EditComment article_id={article_id} setComments={setComments} id={comment.id} entity={commentApi} data={comment.content} />
            <DeleteComment article_id={article_id} setComments={setComments} id={comment.id} entity={commentApi} />
          </li>
          {comment.nb_replies > 0 &&
            <ul>{comment.replies.map(reply =>
              <li key={reply.id}>
                {parse(reply.content)}
                <EditComment article_id={article_id} setComments={setComments} id={reply.id} entity={replyApi} data={reply.content} />
                <DeleteComment article_id={article_id} setComments={setComments} id={reply.id} entity={replyApi} />
              </li>)}
            </ul>}
        </>)}
      </ul>
    </>
  );
}
