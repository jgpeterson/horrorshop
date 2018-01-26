class Api::CustomsController < ApplicationController
    def index
        @customs = Custom.all 
   
        render json: @customs
       end 

end
