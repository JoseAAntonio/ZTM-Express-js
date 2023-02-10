function getMessages (req, res) {
	res.send('<ul><li>Hello Sir Isaac Newton</li></ul>');
	res.end();
}

function postMessage (req, res) {
	console.log("updating messages...");
}

module.exports = {
    getMessages,
    postMessage,
}

