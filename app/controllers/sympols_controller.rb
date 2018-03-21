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

    search_traits = params[:search_traits]
      if search_traits
        trait = Trait.find_by(name: search_traits[0])
        @sympols = trait.sympols

        search_traits[1..-1].each do |individual_trait|
          p individual_trait
          trait = Trait.find_by(name: individual_trait)
          @sympols &= trait.sympols
        end
      end
      
    render 'index.json.jbuilder'   
  end

  def create
    @sympol = Sympol.new(
                          name: params[:name],
                          origin: params[:origin],
                          description: params[:description],
                          image: params[:image]
                          )

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


# Perhaps this goes in the images_controller?
  def image
    require "google/cloud/vision"
    require "google/cloud/storage"

    project_id = "stoked-summer-197902"
    key_file = "/Users/ciaranfrancismcgoldrick/gcf_ocr/Sympol-280d9d23de05.json"

    storage = Google::Cloud::Storage.new project: project_id, keyfile: key_file 

    vision = Google::Cloud::Vision.new project: project_id, keyfile: key_file

      # The name of the image file to annotate
      # file_name = "/Users/Allen/Downloads/cup.jpeg"
      # image_path = "/Users/Allen/Downloads/cup.jpeg"
      image_path = params[:image]
      image  = vision.image image_path
      web = image.web

      web_links = []
      index = 0
      web_length = web.pages_with_matching_images.length 
      web_length.times do
        web_links << web.pages_with_matching_images[index].grpc['url']
        index += 1 
      end

      # pp web.full_matching_images
      # p "__________________-_______"
      # pp web.partial_matching_images


      render json: web_links

      # puts web.methods
      # Performs label detection on the image file
      # web = vision.image(file_name).labels
  end
end



