const express = require("express");
const { default: next } = require("next");

const app = express();
const port = 3000;

const friends = [
	{
		id: 1,
		name: "Isaac Newton",
	},
	{
		id: 2,
		name: "Michael Jackson",
	},
	{
		id: 3,
		name: "Jordan Williams",
	},
];

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

app.get("/friends", (_, res) => {
	res.json(friends);
});

app.get("/friends/:friendsId", (req, res) => {
	const friendsId = +req.params.friendsId;
	const friend = friends[friendsId];

	friend
		? res.json(friend)
		: res.status(404).json({ error: "friend does not exist" });
});

app.post("/messages", (req, res) => {
	console.log("updating messages...");
});

app.listen(port, () => {
	console.log(`Server running in port ${port}`);
});
