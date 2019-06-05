class UserSerializer < ActiveModel::Serializer
  attributes :id, :pseudo, :email, :password, :role
end
