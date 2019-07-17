class Category < ApplicationRecord
  resourcify
  validates_presence_of :cartegory_id, :name
  belongs_to :article
end
