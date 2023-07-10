class User < ApplicationRecord
  include Devise::Models # Add this line if not already present

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  after_create :create_additional_data

  include DeviseTokenAuth::Concerns::User

  def create_additional_data
    # Create ShoppingCart
    ShoppingCart.create!(
      user: self # Set the user association using 'self'
    )
  end
end
