class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at, :updated_at, :nb_comments, :comments

  def nb_comments
    Comment.where(article_id: object.id).count
  end
end
