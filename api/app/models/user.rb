class User < ApplicationRecord
  rolify
  validates_presence_of :pseudo, :password, :email
  after_create :assign_default_role

  def assign_default_role
    self.add_role(:user) if self.roles.blank?
  end


#     ROLES = {0 => :guest, 1 => :user, 2 => :moderator, 3 => :admin}
#     attr_reader :role

#   def initialize(role_id = 0)
#     @role = ROLES.has_key?(role_id.to_i) ? ROLES[role_id.to_i] : ROLES[0]
#   end

#   def role?(role_name)
#     role == role_name
#   end
end
