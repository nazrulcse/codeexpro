class Article < ActiveRecord::Base
  attr_accessible :content, :sub_content, :title, :url, :user_id
  belongs_to :user
  scope :search, lambda{|term| where("lower(title) like lower(?) or lower(content) like lower(?)", "%#{term}%", "#{term}%")}
  has_many :comments

end
