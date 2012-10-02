var sp = getSpotifyApi(1),
	models = sp.require('sp://import/scripts/api/models'),
	lib = models.library,
	search = models.search;
exports.init = init;

function init() {
	$('h1').click(function() {
		alert('heaiguahiuhaghiuaghiuiu');
	})

	$('div').click(function() {
		alert('haha why did you click that?  loser.')
	})



	;
}


