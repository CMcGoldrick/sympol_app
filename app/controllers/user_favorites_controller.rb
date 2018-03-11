class UserFavoritesController < ApplicationController
  def index
    @favorites = UserFavorite.all

    render json: @favorites
  end

  def create
    # @current_user = User.find(current_user.id)

    @favorite = UserFavorite.new(
          # user_id: @current_user,
          user_id: params[:user_id],
          sympol_id: params[:sympol_id]
          )

    @favorite.save

    render json: {message: "succefully added favorite sympol"}
  end

  def destroy
    favorite = UserFavorite.find(params[:id])    

    favorite.destroy

    render json: {message: "Succesfully destroyed that manifestation"}
  end
end



