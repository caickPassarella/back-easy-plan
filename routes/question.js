const express = require("express");
const questionController = require("../services/question/questionController");
const router = express.Router();

router.get("/", questionController.getAll);
router.get("/:filter", questionController.getOne);

router.post("/", questionController.create);

router.delete("/:filter", questionController.deleteOne);

module.exports = router;