class SympolTraitsController < ApplicationController
  def index
    @sympoltraittrait = SympolTrait.all

    render json: {message: "check out these sympoltraits:", 
                  symbols: @sympoltraittrait}
  end

  def create
    @sympoltrait = SympolTrait.new(
                          name: params[:name],
                          origin: params[:origin],
                          description: params[:description])

    @sympoltrait.save

    render json: @sympoltrait
  end

  def show
    @sympoltrait = SympolTrait.find(params[:id])
    render json: @sympoltrait
  end

  def update  
    @sympoltrait = SympolTrait.find(params[:id])

    @sympoltrait.name = params[:name] || @sympoltrait.name
    @sympoltrait.origin = params[:origin] || @sympoltrait.origin
    @sympoltrait.description = params[:description] || @sympoltrait.description

    @sympoltrait.save
    render json: @sympoltrait
  end

  def destroy
    sympoltrait = SympolTrait.find(params[:id])

    sympoltrait.destroy

    render json: {message: "Succesfully destroyed sympoltrait ##{sympoltrait.id}"}
  end
end
