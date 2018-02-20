class Sympol < ApplicationRecord
  has_many :sympol_traits
  has_many :traits, through: :sympol_traits

  
end





