class SympolsController < ApplicationController
  def index
    @sympols = Sympol.all

    search_name = params[:search_name]
      if search_name
        @sympols = @sympols.where("name iLike ?", "%#{search_name}%")
      end

    search_origin = params[:search_origin]
      if search_origin
        @sympols = @sympols.where("origin iLike ?", "%#{search_origin}%")
      end

    search_description = params[:search_description]
      if search_description
        @sympols = @sympols.where("description iLike ?", "%#{search_description}%")
      end

    search_trait = params[:search_trait]
      if search_trait
        trait = Trait.find_by(name: search_trait)
        @sympols = trait.sympols
      end

    render 'index.json.jbuilder'   
  end

  def create
    @sympol = Sympol.new(
                          name: params[:name],
                          origin: params[:origin],
                          description: params[:description])

    @sympol.save

    render 'show.json.jbuilder'
  end

  def show
    @sympol = Sympol.find(params[:id])
    render 'show.json.jbuilder'
  end

  def update  
    @sympol = Sympol.find(params[:id])

    @sympol.name = params[:name] || @sympol.name
    @sympol.origin = params[:origin] || @sympol.origin
    @sympol.description = params[:description] || @sympol.description

    @sympol.save
    render 'show.json.jbuilder'
  end

  def destroy
    sympol = Sympol.find(params[:id])

    sympol.destroy

    render json: {message: "Succesfully destroyed sympol ##{sympol.id}"}
  end
end



