class ApplicationController < ActionController::API
    include ActionController::Helpers
    check_authorization
    helper_method :current_user
    before_action :authenticate_request
    attr_reader :current_user

    private
    def authenticate_request
      @current_user = AuthorizeApiRequest.call(request.headers).result
      render json: { error: 'Not Authorized' }, status: 401 unless @current_user
    end
    
    private
    def current_user
      @token = request.headers[:Authorization]
      if @token
        userid = JsonWebToken.decode(@token) [:user_id]
        User.find(userid)
      end

    end

end
