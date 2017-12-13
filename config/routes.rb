Rails.application.routes.draw do
  namespace :api do 
    get "/figures", to: "figures#index", as: "figures"
  end 
end
