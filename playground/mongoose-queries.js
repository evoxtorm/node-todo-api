const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a0da688dff1b64955c6573b';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
 

 var id = '59fe0a8177e976a81fd1e3cc' ;



 User.findById(id).then((user) => {
 	if (!User) {
 		return console.log('User not found');
 	}

 	console.log(JSON.stringify(user, undefined, 2));
 }).catch((e) => console.log(e));