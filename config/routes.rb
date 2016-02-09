Rails.application.routes.draw do
  get 'static_pages/bio'
  get 'static_pages/faq'
  root 'home#index'

  post 'home_play', to: 'home#play'

  resources :song
  resources :home
  resources :mixtapes

  get 'mixtapes_find_single_mixtape', to: 'mixtapes#find_single_mixtape'
  get 'mixtapes_users_mixtapes', to: 'mixtapes#users_mixtapes'
  get '/calculate_average_rating', to: 'mixtapes#calculate_average_rating'

  devise_for :users, :controllers => { registrations: 'registrations', :omniauth_callbacks => "omniauth_callbacks" }
  # devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks" }
  match '/users/:id/finish_signup' => 'users#finish_signup', via: [:get, :patch], :as => :finish_signup
  # resources :users
  # match '/:id' => 'users#show', :as => :user, via: [:get, :show]
  # trying to get a username as a vanity url
  # match "/:username" => "users#show", :as => 'vanity_url', via: [:get, :patch], :constrain => { :username => /[a-zA-Z-]+/ }
  # get '/:username' => 'users#show', :as => 'vanity_url', :constrain => { :username => /[a-zA-Z-]+/ }
  get ':id', to: 'users#show', as: 'show'
end
