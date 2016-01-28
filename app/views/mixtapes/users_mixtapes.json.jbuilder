json.mixtapes @mixtapes do |mixtape|
	json.id mixtape.id
	json.name mixtape.name
	json.average_rating
	json.category
	json.author_id
	json.random
	json.user_id
	json.created_at

	json.mixtape mixtape.songs do |song|
		json.song_id song.id
		json.song_name song.name

	end

end




