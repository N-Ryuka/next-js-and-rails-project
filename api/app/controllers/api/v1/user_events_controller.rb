module Api
  module V1
    class UserEventsController < ApplicationController
      def index
        render json: current_api_v1_user.events
      end

      def create
        user_events = UserEvent.new(user_id: current_api_v1_user.id, event_id: params[:event_id])
        if user_events.save
          render json: { message: 'Joined!', data: user_events }, status: :ok
        else
          render json: { message: "Couldn't join!", data: user_events.errors }, status: :unprocessable_entity
        end
      end
    end
  end
end