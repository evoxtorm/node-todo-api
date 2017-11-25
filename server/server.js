const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');


var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
	let todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});


app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});


app.get('/todos/:id', (req,res) => {
	var id = req.params.id;
	
	if (!ObjectID.isValid(id)) {
 		return res.status(404).send(); 	
 	}


 	Todo.findById(id).then((todo) => {
	if (!todo) {
		return res.status(404).send();
		}
			res.send({todo});		
		}).catch((e) => {
			res.status(400).send();
		});
		

});

app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;

	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}
			res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});
});

app.listen(3000, () => {
	console.log(`Started up at port${port}`);
});



module.exports = {app};
// const mongoose = require('mongoose');



// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');





// l

// let newUser = new User({
// 	email: ' evostorm96@gmail.com '
// });
// // let newTodo = new Todo({
// // 	text: 'Cook dinner',
// // 	completed: true,
// // 	completedAt:1
// // });

// // newTodo.save().then((doc) => {
// // 	console.log('Saved todo', doc);
// // }, (e) => {
// // 	console.log('Unable to save todo');
// // });

// // let otherTodo = new Todo({
// // 	text: '  Hi   My Name   is   Hitesh'
// // });

// // otherTodo.save().then((doc) => {
// // 	console.log(JSON.stringify(doc, undefined,2));
// // }, (e) => {
// // 	console.log('Unable to save todo');
// // });

// newUser.save().then((doc) => {
// 	console.log('New User', doc);
// }, (e) => {
// 	console.log('Unable to save todo');
// });