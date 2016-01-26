// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
var allAnchorElements = $( "a" );

$(function(){
	// $('a[data-station_id]').click(function(){
	$( "a#playButton" ).find( allAnchorElements ).click(function(){
		var $this = $(this); // Wrap in jQuery the element clicked
		var station_id = $this.data('station_id');
		var the_new_url = 'http://api.dar.fm/player_api.php?station_id='+station_id+'&custom_style=radioslice&partner_token=9388418650';
		$('selector_for_the_player').attr('src', the_new_url);
		return false;
	});
});




// $("a[data-station_id]").data('station_id')

$( "a#playButton" ).find( allAnchorElements )