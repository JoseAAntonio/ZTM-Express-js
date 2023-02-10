const frindController = require('./controllers/friends.controller')
const messageController = require('./controllers/messages.controller')

const express = require("express");


const app = express();
const port = 3000;



// NOTE first middleware to run
app.use((req, res, next) => {
	// register the time the request was made
	const start = Date.now();
	//passes foward
	next();
	//return from endPoint, register the time from request to right before response...
	const delta = Date.now() - start;
	//log method, url and time passed
	console.log(`${req.method} ${req.url} ${delta}`);
});

app.use(express.json());

app.post("/friends", frindController.postFriends);
app.get("/friends", frindController.getFriends);
app.get("/friends/:friendsId", frindController.getfriend);

app.get("/messages", messageController.getMessages)
app.post("/messages", messageController.postMessage);

app.listen(port, () => {
	console.log(`Server running in port ${port}`);
});
