json.mixtapes @mixtapes do |mixtape|
	json.id mixtape.id
	json.name mixtape.name

	json.mixtape mixtape.songs do |song|
		json.song_id song.id
		json.song_name song.name

	end

end