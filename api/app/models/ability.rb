class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    if user.has_role? :admin
      can :manage, :all
    elsif user.has_role? :user
      can :create, :all 
      can :read, :all
      can [:update, :destroy], Article, :user_id user.id
      can [:update, :destroy], Post, :user_id user.id
      can [:update, :destroy], Comment, :user_id user.id
      can [:update, :destroy], User, :id user.id
    else
      can :read, :all
    end
  end
end
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities

#rolify pour les roles