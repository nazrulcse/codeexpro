class Article < ActiveRecord::Base
  attr_accessible :content, :sub_content, :title, :url, :user_id
  belongs_to :user
end
