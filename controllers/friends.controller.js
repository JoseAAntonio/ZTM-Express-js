const model = require('../models/friends.model')

function getFriends (req, res) {
	res.json(model);
}


function getfriend (req, res) {
	const friendsId = +req.params.friendsId;
	const friend = model[friendsId];

	friend
		? res.json(friend)
		: res.status(404).json({ error: "friend does not exist" });
}

function postFriends (req, res) {
	if (!req.body.name) {
		return res.status(400).json({ error: "name is required" });
	}

	const newFriend = {
		name: req.body.name,
		id: model.length,
	};
	model.push(newFriend);

	res.json(newFriend);
}

module.exports = {
    getFriends,
    getfriend,
    postFriends
}