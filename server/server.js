const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

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