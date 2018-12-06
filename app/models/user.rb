class User < ApplicationRecord
  has_many :users_drinks
  has_many :drinks, through: :users_drinks
  has_many :reviews
end
