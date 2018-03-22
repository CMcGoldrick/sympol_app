class User < ApplicationRecord
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
    
  validates_attachment :image,
    content_type: {
      content_type: ["image/jpeg", "image/jpg", "image/gif", "image/png"]
    } 

  has_secure_password
  
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true

  has_many :user_favorites
  has_many :sympols, through: :user_favorites

end
