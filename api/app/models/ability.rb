class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    if user.admin?
      can :manage, :all
    else
      can :read, :all
      can :create, :all 
      can [:update, :destroy], Article, :user_id user.id
      can [:update, :destroy], Post, :user_id user.id
      can [:update, :destroy], Comment, :user_id user.id
      can [:update, :destroy], User, :id user.id
    end
  end
end
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities

