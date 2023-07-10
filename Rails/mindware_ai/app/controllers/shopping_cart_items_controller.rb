class ShoppingCartItemsController < ApplicationController
  # before_action :authenticate_user!
  
  def index
    shopping_cart_items = ShoppingCartItem.all
    render json: shopping_cart_items
  end

  def show
    shopping_cart_item = ShoppingCartItem.find(params[:id])
    render json: shopping_cart_item
  end

  def create
    shopping_cart_item = ShoppingCartItem.new(shopping_cart_item_params)
    if shopping_cart_item.save
      render json: shopping_cart_item, status: :created
    else
      render json: { errors: shopping_cart_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    shopping_cart_item = ShoppingCartItem.find(params[:id])
    if shopping_cart_item.update(shopping_cart_item_params)
      render json: shopping_cart_item
    else
      render json: { errors: shopping_cart_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    shopping_cart_item = ShoppingCartItem.find(params[:id])
    shopping_cart_item.destroy
    head :no_content
  end

  private

  def shopping_cart_item_params
    params.require(:shopping_cart_item).permit(:shopping_cart_id, :product_id, :quantity)
  end
end
