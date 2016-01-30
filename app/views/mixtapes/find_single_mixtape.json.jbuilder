json.(@mixtape, :id, :name)
json.songs  @mixtape.songs do |song|
		json.song_id song.id
		json.song_name song.name

	end

	