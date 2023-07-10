class ProductCategoriesController < ApplicationController
  # before_action :authenticate_user!
  
  def index
    product_categories = ProductCategory.all
    render json: product_categories
  end

  def show
    product_category = ProductCategory.find(params[:id])
    render json: product_category
  end

  def create
    product_category = ProductCategory.new(product_category_params)
    if product_category.save
      render json: product_category, status: :created
    else
      render json: { errors: product_category.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    product_category = ProductCategory.find(params[:id])
    if product_category.update(product_category_params)
      render json: product_category
    else
      render json: { errors: product_category.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    product_category = ProductCategory.find(params[:id])
    product_category.destroy
    head :no_content
  end

  private

  def product_category_params
    params.require(:product_category).permit(:product_id, :category_id)
  end
end
