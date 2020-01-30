const express = require("express");
const questionController = require("../services/question/questionController");
const router = express.Router();

router.get("/", questionController.getAll);
router.get("/:id", questionController.getOne);

router.put("/", questionController.updateAll);
router.put("/:id", questionController.updateOne);

router.delete("/", questionController.deleteAll);
router.delete("/:id", questionController.deleteOne);

router.post("/", questionController.create);

module.exports = router;