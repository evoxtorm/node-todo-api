const {mongoose} = require('./db/mongoose');

const mongoose = require('mongoose');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


// let Todo = mongoose.model('Todo', {
// 	text: {
// 		type: String,
// 		required: true,
// 		minlength: 1,
// 		trim: true
// 	},
// 	completed: {
// 		type: Boolean,
// 		default: false
// 	},
// 	completedAt: {
// 		type: Number,
// 		default: null
// 	}
// });


let User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

let newUser = new User({
	email: ' evostorm96@gmail.com '
});
// let newTodo = new Todo({
// 	text: 'Cook dinner',
// 	completed: true,
// 	completedAt:1
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo');
// });

// let otherTodo = new Todo({
// 	text: '  Hi   My Name   is   Hitesh'
// });

// otherTodo.save().then((doc) => {
// 	console.log(JSON.stringify(doc, undefined,2));
// }, (e) => {
// 	console.log('Unable to save todo');
// });

newUser.save().then((doc) => {
	console.log('New User', doc);
}, (e) => {
	console.log('Unable to save todo');
});