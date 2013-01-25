class HomeController < ApplicationController
  def welcome
    @articles = Article.all || []
  end

  def about_me
    
  end

end
