class ImagesController < ApplicationController
  
  # def image
  #   require "google/cloud/vision"
  #   require "google/cloud/storage"

  #   project_id = "stoked-summer-197902"
  #   key_file = "/Users/ciaranfrancismcgoldrick/gcf_ocr/Sympol-280d9d23de05.json"

  #   storage = Google::Cloud::Storage.new project: project_id, keyfile: key_file 

  #   vision = Google::Cloud::Vision.new project: project_id, keyfile: key_file

  #     image_path = params[:image]
  #     image  = vision.image image_path
  #     web = image.web

  #     web_links = []
  #     index = 0
  #     web_length = web.pages_with_matching_images.length 
  #     web_length.times do
  #       web_links << web.pages_with_matching_images[index].grpc['url']
  #       index += 1 
  #     end

  #     render json: web_links

  # end

end
