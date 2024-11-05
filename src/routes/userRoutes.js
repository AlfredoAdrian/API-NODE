const express = require("express");
const router = express.Router();

router.get("/api/users", (req, res) => {
  res.json(require("../../db/offline/users.json"));
});

module.exports = router;
