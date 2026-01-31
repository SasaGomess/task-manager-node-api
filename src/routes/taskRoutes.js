const taskController = require("../controller/taskController");
const express = require("express");
const router = express.Router();

router.get("/", taskController.listTasks);
router.get("/:id", taskController.findATask);
router.post("/", taskController.createTask);
router.patch("/start/:id", taskController.startsATask);
router.patch("/concludes/:id", taskController.concludesATask);
router.put("/:id", taskController.updateATask)
router.delete("/:id", taskController.deleteATask);


module.exports = router;