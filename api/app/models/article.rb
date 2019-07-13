class Article < ApplicationRecord
  validates_presence_of :title, :content
  has_many :comments, :dependent => :destroy
  has_many :likes, :dependent => :destroy
  resourcify
end
