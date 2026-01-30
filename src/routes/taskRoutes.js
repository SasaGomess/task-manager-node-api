const taskController = require("../controllers/taskController");
const router = express.Router();
const express = require("express");

const server = express();

server.get("/", taskController.listTasks);

module.exports = router;