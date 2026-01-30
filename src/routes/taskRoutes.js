const taskController = require("../controller/taskController");
const router = express.Router();
const express = require("express");

const server = express();

server.get("/", taskController.listTasks);
server.post("/", taskController.createTask);

module.exports = router;