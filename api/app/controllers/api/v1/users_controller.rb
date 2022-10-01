module Api
  module V1
    class UsersController < ApplicationController
      def update
        if current_api_v1_user.update(user_params)
          render json: { data: current_api_v1_user }, status: :ok
        else
          render json: { errors: current_api_v1_user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:name, :email)
      end
    end
  end
end