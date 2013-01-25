class ArticlesController < ApplicationController
  def index
  end

  def create
  end

  def new
    @article = Article.new
  end

  def edit
    
  end

  def preview
    @title = params[:title]
    @content = params[:content]
    respond_to do |format|
      format.js{}
    end
  end

  def create
    @article = current_user.articles.build(params[:article])
    @article.save()
    respond_to do |format|
      format.html{}
    end
  end
end
