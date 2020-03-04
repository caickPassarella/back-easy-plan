const express = require("express");
const { getAll, getOne, updateAll, updateOne, deleteAll, deleteOne, create } = require("../services/question/questionController");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);

router.put("/", updateAll);
router.put("/:id", updateOne);

router.delete("/", deleteAll);
router.delete("/:id", deleteOne);

router.post("/", create);

module.exports = router;