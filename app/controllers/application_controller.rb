class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_action :authenticate_user!

  protect_from_forgery with: :exception
  def ensure_signup_complete
  	return if action_name == "finish_signup"

  	if current_user && !current_user.email_verified?
  		redirect_to root_path
  	end
  end
end
