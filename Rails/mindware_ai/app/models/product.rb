class Product < ApplicationRecord
  has_many :product_categories
  has_many :categories, through: :product_categories
  has_many :shopping_cart_items
  has_many :order_items
  has_many :reviews
end
  