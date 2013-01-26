class ArticlesController < ApplicationController
  def index
  end

  def create
  end

  def new
    @article = Article.new
  end

  def search
    @result = Article.search(params[:term])
  end

  def edit
    
  end

  def show
   @article = Article.find(params[:id])
   @comment = @article.comments.build()
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
