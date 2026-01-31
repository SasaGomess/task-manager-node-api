const taskController = require("../controller/taskController");
const express = require("express");
const router = express.Router();

router.get("/", taskController.listTasks);
router.post("/", taskController.createTask);
router.patch("/start/:id", taskController.startsATask);
router.patch("/concludes/:id", taskController.concludesATask);
router.delete("/:id", taskController.deleteATask);
router.get("/:id", taskController.findATask);

module.exports = router;