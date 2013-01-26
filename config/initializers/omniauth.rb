Rails.application.config.middleware.use OmniAuth::Builder do
  # The following is for facebook
  provider :facebook, '176924659023806', '0b9a39f5ea1dcf863842c479631cc3fa', { :scope => 'user_about_me,user_hometown,user_location,email', :client_options => { :ssl =>  {:verify => false} } }
  provider :twitter, 'bcjVOadd9OE0qtfLKwkw', 'Ayi358BqXAfE4EZtETReOaaOFxer0vb0bAD6NSQb0'
  provider :google, 'domain.com', 'oauth_secret', :scope => 'https://mail.google.com/mail/feed/atom/' 
  # If you want to also configure for additional login services, they would be configured here.
end