class Comment < ApplicationRecord
  resourcify
  validates_presence_of :content, :article_id
  belongs_to :article
  has_many :replies, dependent: :destroy
  accepts_nested_attributes_for :replies
end
