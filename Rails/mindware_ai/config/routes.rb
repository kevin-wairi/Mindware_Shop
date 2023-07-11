Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  resources :users

  resources :products, only: [:index, :show]
  resources :carts

  # Example root route
  # root 'welcome#index'
end
