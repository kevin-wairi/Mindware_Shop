class ReviewsController < ApplicationController
  # before_action :authenticate_user!
  
  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = Review.find(params[:id])
    render json: review
  end

  def create
    review = Review.new(review_params)
    if review.save
      render json: review, status: :created
    else
      render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    review = Review.find(params[:id])
    if review.update(review_params)
      render json: review
    else
      render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :product_id, :rating, :review_content)
  end
end
