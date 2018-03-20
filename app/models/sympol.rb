class Sympol < ApplicationRecord
  has_many :images
  
  has_many :sympol_traits
  has_many :traits, through: :sympol_traits

  has_many :user_favorites
  has_many :users, through: :user_favorites

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
    
  validates_attachment :image,
    content_type: {
      content_type: ["image/jpeg", "image/jpg", "image/gif", "image/png"]
    }

end







