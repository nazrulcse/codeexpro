class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :articles
  has_many :authentications, :dependent => :delete_all
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable #,:omniauthable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :name, :image, :country, :zip
  # attr_accessible :title, :body
  mount_uploader :image, PhotoUploader

  def apply_omniauth(auth)
    # In previous omniauth, 'user_info' was used in place of 'raw_info'
    self.email = auth['extra']['raw_info']['email']
    self.name = auth['user_info']['first_name']
    # Again, saving token is optional. If you haven't created the column in authentications table, this will fail
    authentications.build(:provider => auth['provider'], :uid => auth['uid'], :token => auth['credentials']['token'])
  end

  def update_with_password(params={})
    params.delete(:current_password) if !params[:current_password].blank?
    if params[:password].blank?
      params.delete(:password)
      params.delete(:password_confirmation) if params[:password_confirmation].blank?
    end
    result = update_attributes(params)
    clean_up_passwords
    result
  end

  has_many :comments

end
