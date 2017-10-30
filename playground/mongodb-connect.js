// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);


// Destructuring concepts

// let user = {name: 'Hitesh', age:21};
// var{name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if(err) {
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to Mongodb server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Hitesh Joshi',
	// 	age: 21,
	// 	location: 'New Delhi, India'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert Users', err);
	// 	}

	// 	// console.log(JSON.stringify(result.ops, undefined, 2));
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });


	db.close();
});