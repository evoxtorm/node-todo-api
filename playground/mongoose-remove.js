const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



// Todo.remove({}).then((result) => {
// 	console.log(result);
// });


Todo.findByIdAndRemove('5a131deddd639e45b8ef15d7').then((todo) => {
	console.log(todo);
});