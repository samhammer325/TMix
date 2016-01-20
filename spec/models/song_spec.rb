require 'rails_helper'

RSpec.describe Song, type: :model do
  describe 'attributes' do
    it { should respond_to(:name) }
    it { should respond_to(:artist) }
    it { should respond_to(:album) }
    it { should respond_to(:favorite) }
    it { should respond_to(:genre) } 
    it { should respond_to(:playlist_id) }

  end
end
