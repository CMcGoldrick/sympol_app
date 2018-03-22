class Sympol < ApplicationRecord
  has_many :images
  
  has_many :sympol_traits
  has_many :traits, through: :sympol_traits

  has_many :user_favorites
  has_many :users, through: :user_favorites

end







