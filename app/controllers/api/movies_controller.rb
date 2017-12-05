class Api::MoviesController < ApplicationController
  
          def index
            # get all creatures from db and save to instance variable
            movies = Movie.all
        
            render json: @movies
          end
        end
end
