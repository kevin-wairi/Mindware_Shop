class CartsController < ApplicationController
  before_action :set_cart, only: [:show, :update, :destroy]

  def index
    @carts = Cart.all
    render json: @carts
  end
  
  def show
    render json: @cart
  end

  def update
    if @cart.update(cart_params)
      render json: @cart
    else
      render json: { error: "Failed to update cart" }, status: :unprocessable_entity
    end
  end

  def destroy
    @cart.destroy
    head :no_content
  end

  def create
    # Check if the product is already in the cart
    existing_cart_item = Cart.find_by(user_id: params[:user_id], product_id: params[:product_id])

    if existing_cart_item
      render json: { error: 'Product already in the cart' }, status: :unprocessable_entity
    else
      @cart = Cart.new(cart_params)

      if @cart.save
        render json: @cart, status: :created
      else
        render json: { error: @cart.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end

  def index_by_user
    @carts = Cart.includes(:user, :product).where(user_id: params[:user_id])
    render json: @carts.to_json(include: [:user, :product])
  end
  
  private

  def set_cart
    @cart = Cart.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Cart not found" }, status: :not_found
  end

  def cart_params
    params.require(:cart).permit(:user_id, :product_id, :quantity)
  end
end
