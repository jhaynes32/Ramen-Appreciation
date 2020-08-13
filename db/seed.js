const db = require('../models');

const subscriptionList = require('./info.json');

// removes all pokemon 
db.Subscription.remove({}, () => {
	// loops through the json file
	subscriptionList.forEach(user => {
		// for each one creates a pokemon entry in the DB
		db.Subscription.create(user, (error, createdSub) => {
			if (error) return console.log(error);
			console.log(createdSub);
		});
	});
});