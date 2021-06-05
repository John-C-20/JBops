Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'static_pages#root' 

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create]
    resources :searches, only: [:index]
    resource :session, only: [:create, :destroy]
    resources :playlists, only: [:index, :create, :show]
    resources :songs, only: [:index, :show]
  end

end
