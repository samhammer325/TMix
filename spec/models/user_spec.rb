require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'attributes' do
    it { should respond_to(:email) }
    it { should have_many(:playlists).through(:ratings) }
  end
  
end
