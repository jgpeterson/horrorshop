Rails.application.routes.draw do
  namespace :api do 
    get "/figures", to: "figures#index", as: "figures"
    get "/boards", to: "boards#index", as: "boards"
    post "/boards", to: "boards#create"
    get "/boards/:id", to: "boards#show", as: "board"
  end 
end
