require 'rails_helper'

RSpec.describe "ShoppingCarts", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/shopping_carts/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/shopping_carts/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/shopping_carts/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/shopping_carts/update"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/shopping_carts/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
