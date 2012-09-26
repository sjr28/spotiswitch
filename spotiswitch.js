var sp = getSpotifyApi(1);
var models = sp.require('sp://import/scripts/api/models');
var lib = models.library;
var search = models.search;

exports.init = init;
function init() {
	console.log("init()");
}

document.getElementById('initial').onclick = function(){console.log("hello")};
