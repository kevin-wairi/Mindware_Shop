class OrdersController < ApplicationController
  # before_action :authenticate_user!
  
  def index
    orders = Order.all
    render json: orders
  end

  def show
    order = Order.find(params[:id])
    render json: order
  end

  def create
    order = Order.new(order_params)
    if order.save
      render json: order, status: :created
    else
      render json: { errors: order.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    order = Order.find(params[:id])
    if order.update(order_params)
      render json: order
    else
      render json: { errors: order.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    order = Order.find(params[:id])
    order.destroy
    head :no_content
  end

  private

  def order_params
    params.require(:order).permit(:user_id, :total_amount, :shipping_address, :billing_address, :order_date)
  end
end
