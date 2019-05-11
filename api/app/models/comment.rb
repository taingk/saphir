class Comment < ApplicationRecord
  validates_presence_of :content, :article_id
  belongs_to :article
end
