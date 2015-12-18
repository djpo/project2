var express = require('express');
var router = express.Router();
var db = require('./../models');
var session = require('express-session');

var calcSoulTempo = function(tempos) {
	var tempoNumerator = 0;
	tempos.forEach(function(tempo) {
		tempoNumerator += tempo;
	});
	return tempoNumerator / tempos.length;
};





router.get('/', function(req, res) {
	console.log('_____summary.js GET route_____');
	console.log(req.session.user);


// 	db.favorite.findAll({
// 		where: {
// 			u_id: req.session.user
// 		}
// 		// order: 'updatedAt DESC'
// 	}).then(function(favorites) {
// 		res.render('summary', {collection: favorites});
// 	});

	// calculate soul tempo
	// insert soul tempo into db?
	// send to summary below


	// res.render('summary', {ids: req.session.myIds});
	res.render('summary');
});



module.exports = router;