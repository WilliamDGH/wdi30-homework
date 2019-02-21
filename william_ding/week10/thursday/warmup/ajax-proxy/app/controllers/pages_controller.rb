class PagesController < ApplicationController

  def search
    url = params[:url]
    url.
    # response = HTTParty.get(params[:url])

    render :plain => params[:url]
  end

end
