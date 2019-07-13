class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    if user.has_role? :admin
      can :manage, :all
    elsif user.has_role? :user
      can :create, :all
      can :read, :all
      can :manage, Article
      can [:update, :destroy], Post
      can [:update, :destroy], Comment
      can [:update, :destroy], User
      # can [:update, :destroy], User, :id user.id
    else
      can :read, :all
      can :create, User
      can :manage, :all
    end
  end
end
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities

#rolify pour les roles