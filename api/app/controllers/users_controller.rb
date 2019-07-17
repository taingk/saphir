class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  skip_before_action :authenticate_request
  load_and_authorize_resource
  skip_authorization_check :only => [:create, :login]
  wrap_parameters :user, include: [:username, :email ,:password, :password_confirmation]
  
  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)
    authorize! :read, @post
    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  # GET /upgrade/1
  def upgrade
    @user.remove_role :user
    @user.add_role :admin
  end

#
  def downgrade
    @user.remove_role :admin
    @user.add_role :user
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :password, :password_digest)
    end

    def login
        auth_object = Authentication.new(login_params)
        if auth_object.authenticate
            render json: {
                message: "Connexion réussie!", token:
            auth_object.generate_token }, status: ok
        else
            render json: {
                message: "Identifiant ou mot de passe incorrect"}, status: :unauthorized
        end
    end

    private

    def login_params
        params.permit(:email, :password)
    end
end
