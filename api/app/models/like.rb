class Like < ApplicationRecord
  resourcify
  validates_presence_of :article_id
  belongs_to :article
end
