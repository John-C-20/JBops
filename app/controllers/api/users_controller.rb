class Api::UsersController < ApplicationController
    def index
        @users = User.all 
        render json: @users 
    end

    def create
        @user = User.new(user_params)

        if @user.save 
            login!(@user) 
            render :show 
        else
            render json: @user.errors.full_messages, status: 422 
        end
    end

    private 
    
    def user_params
        params.require(:user).permit(:username, :email, :password, :dob_month, :dob_day, :dob_year, :gender)
    end
end
