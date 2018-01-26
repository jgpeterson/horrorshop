class Api::TrailersController < ApplicationController
    def index
        @trailers = Trailer.all 
   
        render json: @trailers
       end 
end


