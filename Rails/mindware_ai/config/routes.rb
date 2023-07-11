Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  resources :users

  resources :products, only: [:index, :show]
  resources :carts

  # Example root route
  # root 'welcome#index'

  # Add the route
  get 'carts/user/:user_id', to: 'carts#index_by_user'
end