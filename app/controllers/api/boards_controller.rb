class Api::BoardsController < ApplicationController

    def index 

        @boards = Board.all 

        render json: @boards 
    end

    def create 

        board_params = params.require(:board).permit(:title, :description)

        @board = Board.new(board_params)

        if @board.save 
            render json: @board 
        end
    
    def show 
        board_id = params[:id]

        @board = Board.find_by_id(board_id)

        render json: @board 
    end 

    def update 

        board_id = params[:id]

        @board = Board.find_by_id(board_id)

        board_params = params.require(:board).permit(:title, :description)

        @board.update_attributes(board_params)

        render json: @board 
    end

    def destroy 

        board_id = params[:id]

        @board = Board.find_by_id(board_id)

        @board.destroy

        render json: {
            msg: "Successfully Deleted"
        }
    end 
end
