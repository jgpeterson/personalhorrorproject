Rails.application.routes.draw do
  namespace :api do
    get "/movies", to: "movies#index", as: "movies"
  end
end
