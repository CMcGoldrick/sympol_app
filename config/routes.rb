Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/sympols' => 'sympols#index'
  post '/sympols' => 'sympols#create'
  get '/sympols/:id' => 'sympols#show'
  patch 'sympols/:id' => 'sympols#update'
  delete 'sympols/:id' => 'sympols#destroy'
    
  get '/traits' => 'traits#index'
  post '/traits' => 'traits#create'
  get '/traits/:id' => 'traits#show'
  patch 'traits/:id' => 'traits#update'
  delete 'traits/:id' => 'traits#destroy'

  get '/sympol_traits' => 'sympol_traits#index'
  post '/sympol_traits' => 'sympol_traits#create'
  get '/sympol_traits/:id' => 'sympol_traits#show'
  patch 'sympol_traits/:id' => 'sympol_traits#update'
  delete 'sympol_traits/:id' => 'sympol_traits#destroy'

end




