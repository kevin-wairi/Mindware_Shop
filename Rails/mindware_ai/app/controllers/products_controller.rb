class ProductsController < ApplicationController
  # before_action :authenticate_user!, except: [:index, :show]

  def index
    products = Product.all
    render json: products
  end

  def show
    product = Product.includes(:categories, :shopping_cart_items, :order_items, :reviews).find(params[:id])
    render json: product.to_json(include: [:categories, :shopping_cart_items, :order_items, :reviews])
  end
  
  def create
    product = Product.new(product_params)
    if product.save
      render json: product, status: :created
    else
      render json: { errors: product.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    product = Product.find(params[:id])
    if product.update(product_params)
      render json: product
    else
      render json: { errors: product.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    product = Product.find(params[:id])
    product.destroy
    head :no_content
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price, :image_url)
  end
end
