class User < ApplicationRecord
  has_secure_password
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true


  has_many :user_favorites
  has_many :sympols, through: :user_favorites
end
