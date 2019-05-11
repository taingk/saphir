class Article < ApplicationRecord
  validates_presence_of :title, :content
  has_many :comments, :dependent => :destroy
end
