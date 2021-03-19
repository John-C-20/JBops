class ApplicationController < ActionController::Base
    helper_method :logged_in?, :current_user 

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in 
        unless logged_in? 
            render json: ['Current user not found'], status: 404
        end
    end

    def login!(user) 
        session[:session_token] = user.session_token
    end

    def logout! 
        current_user.reset_session_token! 
        session[:session_token] = nil 
        @current_user = nil 
    end

    def logged_in? 
        !!current_user
    end
end


