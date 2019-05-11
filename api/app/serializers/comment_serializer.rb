class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :article_id, :created_at, :updated_at, :nb_replies, :replies

  def nb_replies
    Reply.where(comment_id: object.id).count
  end
end
