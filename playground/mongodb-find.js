// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if(err) {
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to Mongodb server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('59f73b20b9e8dfb0a232352b')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });


	// db.collection('Todos').find({}).count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });


	db.collection('Users').find({}).count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	// db.close();
});