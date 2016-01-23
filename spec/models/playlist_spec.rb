require 'rails_helper'

RSpec.describe Playlist, type: :model do

  describe 'attributes' do
    it { should respond_to(:name) }
    it { should respond_to(:random) }
    it { should respond_to(:user_id) }
    it { should respond_to(:author_id) }
    
    it { should have_many(:users).through(:ratings) }
  end  

end  