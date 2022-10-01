module Api
  module V1
    class EventsController < ApplicationController
      def index
        render json: Event.all
      end

      def show
        render json: { event: Event.find(params[:id]), joined: !!current_api_v1_user.events.find_by(id: params[:id]) }
      end
    end
  end
end