require 'rails_helper'

RSpec.describe Rating, type: :model do
  describe 'attributes' do
    it { should respond_to(:score) }
    it { should respond_to(:user_id) }
    it { should respond_to(:playlist_id) }
    it { should belong_to(:user) }
  end  
end  
