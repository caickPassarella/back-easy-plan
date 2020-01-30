const express = require("express");
const questionController = require("../services/question/questionController");
const router = express.Router();

router.get("/", questionController.getAll);
router.get("/:id", questionController.getOne);

router.post("/", questionController.create);

router.delete("/", questionController.deleteAll);
router.delete("/:id", questionController.deleteOne);

module.exports = router;