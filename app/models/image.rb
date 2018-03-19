class Image < ApplicationRecord
  belongs_to :sympol

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
    
  validates_attachment :image,
    content_type: {
      content_type: ["image/jpeg", "image/jpg", "image/gif", "image/png"]
    }
end




