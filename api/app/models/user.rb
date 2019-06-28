class User < ApplicationRecord
  rolify
  validates_presence_of :pseudo, :password, :email
  after_create :assign_default_role

  def assign_default_role
    self.add_role(:user) 
  end

end

# if self.roles.blank?