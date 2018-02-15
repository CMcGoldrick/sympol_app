Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/traits' => 'traits#index'
  post '/traits' => 'traits#create'
  get '/traits/:id' => 'traits#show'
  patch 'traits/:id' => 'traits#update'
  delete 'traits/:id' => 'traits#destroy'

  


end


