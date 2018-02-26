class SympolTraitsController < ApplicationController
  def index
    @sympol_traits = SympolTrait.all

    search_trait = params[:search_trait]
      if search_trait
        @sympol_traits = @sympol_traits.where("trait_id LIKE ?", "%#{search_trait}%")
      end

    render 'index.json.jbuilder'
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
