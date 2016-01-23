class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable


  TEMP_EMAIL_PREFIX = "change@me"
  TEMP_EMAIL_REGEX = /\Achange@me/

  has_many :rating, dependent: :destroy
  has_many :playlists, through: :ratings, dependent: :destroy
  #TODO: User can't have many songs unless songs has a user_id!
  has_many :songs, dependent: :destroy
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable

  validates_format_of :email, :without => TEMP_EMAIL_REGEX, on: :update

  def self.find_for_oauth(auth, signed_in_resource = nil)
    identity = Identity.find_for_oauth(auth)

    user = signed_in_resource ? signed_in_resource :identity.user

    if user.nil?
      email_is_verified = auth.info.email && (auth.info.verified || auth.info.verified_email)
      email = auth.info.email if email_is_verified
      user = User.where(:email => email).first if email

      if user.nil?
        user = User.new(
          name: auth.extra.raw_info.name,
          #username: auth.info.nickname || auth.uid,
          email: email ? email : "#{TEMP_EMAIL_PREFIX}-#{auth.uid}-#{auth.provider}.com",
          password: Devise.friendly_token[0,20]
        )
        user.skip_confirmation! #if user.respond_to?(:skip_confirmation)
        user.save!
      end
    end

    # associate identity with user if needed
    if identity.user != user
      identity.user = user
      identity.save!
    end
    user
  end

  def email_verified?
    self.email && self.email !~ TEMP_EMAIL_REGEX
  end

  
  # def self.from_omniauth(auth)
  #  where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
  #    user.email = auth.info.email
  #    user.password = Devise.friendly_token[0,20]
  #  end
  # end

end
