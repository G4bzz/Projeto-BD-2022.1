const express = require('express');
const bodyParser = require('body-parser');
const db_users = require('./crudUsers.js');
const db_events = require('./crudEvents.js');
const db_comments = require('./crudComments.js');

const app = express();
//heroku port = 1337;

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.get('/api/', (request, response) =>{
	response.json({info: 'Sucelson'})
});

app.get('/api/users', db_users.getUsers);
app.get('/api/users/:id', db_users.getUserById);
app.post('/api/users', db_users.createUser);
app.put('/api/users/:id', db_users.updateUser);
app.delete('/api/users/:id', db_users.deleteUser);

app.get('/api/events', db_events.getEvents);
app.get('/api/events/:id', db_events.getEventById);
app.post('/api/events', db_events.createEvent);
app.put('/api/events/:id', db_events.updateEvent);
app.delete('/api/events/:id', db_events.deleteEvent);

app.get('/api/comments', db_comments.getComments);
//app.get('/api/comments/:id', db_comments.getCommentById);
app.get('/api/comments/:id', db_comments.getCommentsByEvent);
app.post('/api/comments', db_comments.createComment);
app.put('/api/comments/:id', db_comments.updateComment);
app.delete('/api/comments/:id', db_comments.deleteComment);

app.post('/api/reagido', db_comments.createReagido);
app.get('/api/reagido', db_comments.getReagidos);
app.delete('/api/reagido/:id', db_comments.deleteReagido);

app.listen(process.env.PORT || 3000, () =>{
	console.log(`App running on port ${process.env.PORT || 3000}`);
});