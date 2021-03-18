class User < ApplicationRecord
    validates :username, :email, :password_digest, presence: true 
    validates :username, :email, uniqueness: true 
    validates :password, length: {minimum: 6, allow_nil: true}


    attr_reader :password 

    before_validation :ensure_session_token

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password 
    end

    def is_password?(password)
        pw = BCrypt::Password.new(self.password_digest)
        pw.is_password?(password) 
    end

    def self.find_by_credentials(name_or_email, password)
        user = User.find_by(username: name_or_email) || User.find_by(email: name_or_email)
        if user && user.is_password?(password) 
            user 
        else
            nil
        end  
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token! 
        self.session_token = SecureRandom::urlsafe_base64 
        self.save
        self.session_token
    end
end
