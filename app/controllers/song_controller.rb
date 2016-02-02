class SongController < ApplicationController
  def index
  end

  def create

  	song_name = params[:name]
  	artist = params[:artist]
  	mixtape_id = params[:mixtape_id]
    @song = Song.new()
    @song.mixtape_id = mixtape_id
    @song.name = song_name
    @song.artist = artist

    @song.save
    #TODO: check if song is unique

    # if @song.save
    # 	#todo slidetoggle artist
    # end
    render json: @mixtape
  end

  def destroy
    Song.find(params[:id]).destroy
    head :ok
  end

  # def show
  # 	@songs = Song.find_by(mixtape_id: params[:mixtape_id])
  # end

  private

    # def song_params
    #   params.require(:song).permit(:name, :artist, :mixtape_id)
    # end
end
