class Project < ActiveRecord::Base
  attr_accessible :description, :image, :name, :title, :url
  mount_uploader :image, ImageUploader
end
