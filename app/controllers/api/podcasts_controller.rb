class Api::PodcastsController < ApplicationController

    def index
        @podcasts = Podcast.all

        render json: @podcasts
    end
end
