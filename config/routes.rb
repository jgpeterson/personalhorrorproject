Rails.application.routes.draw do
  namespace :api do
    get "/movies", to: "movies#index", as: "movies"
    get "/blogs", to: "blogs#index", as: "blogs"
  end
end
