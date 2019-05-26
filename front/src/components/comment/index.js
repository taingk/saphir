import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import commentApi from '../../utils/commentApi';
import replyApi from '../../utils/replyApi';
import Reply from '../reply';
import NewComment from './new';
import NewReply from '../reply/new';
import EditComment from './edit';
import DeleteComment from './delete';

export const CommentsNumber = ({ nbComments }) => (
  <span>
    {nbComments} Commentaire
    {nbComments > 1 ? 's' : null}
  </span>
);

const Comment = ({ article_id, setComments, comment, api }) => (
  <li>
    {parse(comment.content)}
    <NewReply
      article_id={article_id}
      setComments={setComments}
      comment_id={comment.id}
    />
    <EditComment
      article_id={article_id}
      setComments={setComments}
      id={comment.id}
      api={api}
      data={comment.content}
    />
    <DeleteComment
      article_id={article_id}
      setComments={setComments}
      id={comment.id}
      api={api}
    />
  </li>
);

export default ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentApi.getAll({ article_id }).then(comments => setComments(comments));
  }, [article_id]);

  if (!comments.length) {
    return (
      <div>
        <CommentsNumber nbComments={comments.length} />
        <NewComment article_id={article_id} setComments={setComments} />
        <p>Il n'y a pas de commentaire.</p>
      </div>
    );
  }

  return (
    <div>
      <CommentsNumber nbComments={comments.length} />
      <NewComment article_id={article_id} setComments={setComments} />
      <ul>
        {comments.map(comment => (
          <React.Fragment key={comment.id}>
            <Comment
              article_id={article_id}
              setComments={setComments}
              comment={comment}
              api={commentApi}
            />
            {comment.nb_replies > 0 && (
              <ul>
                {comment.replies.map(reply => (
                  <Reply
                    key={reply.id}
                    article_id={article_id}
                    setComments={setComments}
                    reply={reply}
                    api={replyApi}
                  />
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
