Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  resources :users

  resources :products, only: [:index, :show]
  resource :cart, only: [:show, :create, :update, :destroy]
  
  # Example root route
  # root 'welcome#index'
end
