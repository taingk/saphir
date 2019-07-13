class Article < ApplicationRecord
  validates_presence_of :title, :content
  has_many :comments, :dependent => :destroy
  has_many :likes, :dependent => :destroy
  has_one :user, class_name: "User", foreign_key: "id"
  resourcify
end
