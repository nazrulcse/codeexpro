class Comment < ActiveRecord::Base
  attr_accessible :subject, :text, :user_id, :article_id
  belongs_to :article
  belongs_to :user
end
