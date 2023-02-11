const express = require("express");

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');



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
	console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}`);
});

app.use(express.json());

//mounting the routers on the app object as Middleware
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(port, () => {
	console.log(`Server running in port ${port}`);
});
