class Api::FiguresController < ApplicationController

    def index 
        @figures = Figure.all
        
        render json: @figures
    end
end
