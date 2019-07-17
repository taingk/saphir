class User < ApplicationRecord
  rolify
  has_secure_password
  validates_presence_of :username, :password, :email
  after_create :assign_default_role
  
  def assign_default_role
    self.add_role(:user) 
  end

end

# if self.roles.blank?