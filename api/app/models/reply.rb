class Reply < ApplicationRecord
  validates_presence_of :content, :comment_id
  belongs_to :comment
end
