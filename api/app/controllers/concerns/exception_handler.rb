module ExceptionHandler
    extend ActiveSupport::Concern

    class DecodeError < StandardError; end
    class ExpireSignature < StandardError; end

    included do
        rescue_from ExceptionHandler::DecodeError do |_error|
            render json: {
                message: "Accès refusé! Token invalide"
            }, status: unauthorized
        end

        rescue_from ExceptionHandler::ExpiredSignature do |_error|
            render json: {
                message: "Accès refusé! Token expiré"
            }, status: unauthorized
        end
    end
end