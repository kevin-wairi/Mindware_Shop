class ShoppingCartsController < ApplicationController
  before_action :set_shopping_cart, only: [:show, :update, :destroy]

  def add_product
    @shopping_cart = ShoppingCart.find(params[:id])
    @product = Product.find(params[:product_id])

    # Add the product to the cart
    @shopping_cart.shopping_cart_items.create(product: @product, quantity: 1)

    # Redirect or respond as needed
    render json: @shopping_cart
  end

  def shopping_cart
    @user = User.find(params[:id])
    @shopping_cart = @user.shopping_cart

    render json: @shopping_cart
  end

  def show_by_user
    @user = User.find(params[:user_id])
    @shopping_cart = @user.shopping_cart

    render json: @shopping_cart
  end

  def index
    shopping_carts = ShoppingCart.all
    render json: shopping_carts
  end

  def show
    render json: @shopping_cart
  end

  def create
    shopping_cart = ShoppingCart.new(shopping_cart_params)
    if shopping_cart.save
      render json: shopping_cart, status: :created
    else
      render json: { errors: shopping_cart.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @shopping_cart.update(shopping_cart_params)
      render json: @shopping_cart
    else
      render json: { errors: @shopping_cart.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @shopping_cart.destroy
    head :no_content
  end

  private

  def set_shopping_cart
    @shopping_cart = ShoppingCart.find(params[:id])
  end

  def shopping_cart_params
    params.require(:shopping_cart).permit(:user_id)
  end
end
