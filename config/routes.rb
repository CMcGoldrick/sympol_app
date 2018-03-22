Rails.application.routes.draw do
  get '/sympols' => 'sympols#index'
  post '/sympols' => 'sympols#create'
  get '/sympols/:id' => 'sympols#show'
  patch 'sympols/:id' => 'sympols#update'
  delete 'sympols/:id' => 'sympols#destroy'
  get "/images" => "sympols#image"
  post "/images" => "sympols#image"
    
  
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


  get '/users' => 'users#index'
  post  '/users'  =>  'users#create'
  get '/user/:id' =>'users#show'
  patch '/user/:id' => 'users#update'
  
  post '/user_token' => 'user_token#create'  

  get 'user_favorites' => 'user_favorites#index'
  post '/user_favorites' => 'user_favorites#create'
  delete 'user_favorites/:id' => 'user_favorites#destroy'
end








