class SympolsController < ApplicationController
  def index
    @sympols = Sympol.all

    search_term = params[:search]
    if search_term
      @sympols = @sympols.where("name iLike ?", "%#{search_term}%")
    end



    # origin_name = params[:origin]
    # if category_name
    #   @sympols = Sympol.find_by(origin: origin_name).sympols
    # end

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



