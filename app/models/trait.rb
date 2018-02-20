class Trait < ApplicationRecord
  has_many :sympol_traits
  has_many :sympols, through: :sympol_traits
end
