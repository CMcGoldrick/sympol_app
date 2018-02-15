class TraitsController < ApplicationController

  def index
    @traits = Trait.all
    render json: @traits

  end

  def show
    @traits = Trait.find(params[:id])
    render json: @traits
  end


  
end
