class ApplicationController < ActionController::API
<<<<<<< HEAD
    include ActionController::Helpers
<<<<<<< HEAD
    check_authorization
=======

>>>>>>> login working, logout WIP
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
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
    
=======
    include ExcpetionHandler
>>>>>>> Authentication classes, to be tested
end
