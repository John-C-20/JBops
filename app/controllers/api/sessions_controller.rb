class Api::SessionsController < ApplicationController
     before_action :ensure_logged_in, only: [:destroy]
    
    def create
        @user = User.find_by_credentials(user_params[:name_or_email], user_params[:password])
        if @user 
            login!(@user)
            render "api/users/show"
        else 
            render json: ["Invalid username or password"], status: 401 
        end
    end

    def destroy 
        logout! 
        render json: {}
    end

    private 

    def user_params
        params.require(:user).permit(:name_or_email,:password)
    end
end
