Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  resources :users

  resources :products, only: [:index, :show, :create, :update, :destroy]
  resources :categories, only: [:index, :show, :create, :update, :destroy]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :order_items, only: [:index, :show, :create, :update, :destroy]
  resources :orders, only: [:index, :show, :create, :update, :destroy]
  resources :shopping_cart_items, only: [:index, :show, :create, :update, :destroy]
  resources :shopping_carts, only: [:index, :show, :create, :update, :destroy]
  resources :product_categories, only: [:index, :show, :create, :update, :destroy]

  resources :shopping_carts do
    get 'user/:user_id', action: :show_by_user, on: :collection
    post 'add_product', on: :member
  end
  
  

  # Example root route
  # root 'welcome#index'
end
