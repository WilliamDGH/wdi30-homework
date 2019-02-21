Rails.application.routes.draw do
  get '/:url' => 'pages#search'
end
