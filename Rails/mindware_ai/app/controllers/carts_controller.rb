class CartsController < ApplicationController
    before_action :set_cart, only: [:show, :create, :update, :destroy]
    
    def index
      render json: @cart
    end
  
    def show
      render json: @cart
    end
  
    def create
      @cart = Cart.create(cart_params)
      render json: @cart
    end
  
    def update
      @cart.update(cart_params)
      render json: @cart
    end
  
    def destroy
      @cart.destroy
      head :no_content
    end
  
    private
  
    def set_cart
      @cart = Cart.all # Cart.find_or_create_by(user_id: current_user.id)
    end
  
    def cart_params
      params.require(:cart).permit(:user_id, :product_id, :quantity)
    end
end
