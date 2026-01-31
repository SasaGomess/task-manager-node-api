const taskController = require("../controller/taskController");
const express = require("express");
const router = express.Router();

router.get("/", taskController.listTasks);
router.post("/", taskController.createTask);
router.patch("start/:id", taskController.startsATask);

module.exports = router;