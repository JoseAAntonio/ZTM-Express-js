const express = require('express');

const friendController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log('ip adress:', req.ip);
    next();
})

friendsRouter.post("/", friendController.postFriends);
friendsRouter.get("/", friendController.getFriends);
friendsRouter.get("/:friendsId", friendController.getfriend);

module.exports = friendsRouter;