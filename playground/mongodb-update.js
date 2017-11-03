// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if(err) {
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to Mongodb server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('59f896ecb9e8dfb0a2324236')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	} 
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });


	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('59f619df6ab67c36e48516a4')
	}, {
		$set: {
			name: 'Hitesh'
	},
		$inc: {
		age: 1
	}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	// db.close();
});