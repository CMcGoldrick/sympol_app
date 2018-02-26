class TraitsController < ApplicationController
  def index
    @traits = Trait.all

    render json: {message: "check out these traits:", 
                  sympols: @traits}
  end

  def create
    @trait = Trait.new(
                          name: params[:name],
                          origin: params[:origin],
                          description: params[:description])

    @trait.save

    render json: @trait
  end

  def show
    @trait = Trait.find(params[:id])
    render json: @trait
  end

  def update  
    @trait = Trait.find(params[:id])

    @trait.name = params[:name] || @trait.name
    @trait.origin = params[:origin] || @trait.origin
    @trait.description = params[:description] || @trait.description

    @trait.save
    render json: @trait
  end

  def destroy
    trait = Trait.find(params[:id])

    trait.destroy

    render json: {message: "Succesfully destroyed sympol ##{sympol.id}"}
  end
end
