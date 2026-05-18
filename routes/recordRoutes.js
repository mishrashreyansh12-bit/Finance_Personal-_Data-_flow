// import * as faceapi from "face-api.js";
// const express = require("express");
// const router = express.Router();
// const Record = require("../models/Record");


// const { protect } = require("../middleware/authMiddleware");
// const { allowRoles } = require("../middleware/roleMiddleware");

// // CREATE (Admin only)
// router.post("/", protect, allowRoles("admin"), async (req, res) => {
//   const record = await Record.create(req.body);
//   res.json(record);
// });

// // GET (Analyst + Admin)
// router.get("/", protect, allowRoles("analyst", "admin"), async (req, res) => {
//   const records = await Record.find();
//   res.json(records);
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Record = require("../models/Record");

const { protect } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

// CREATE (Analyst + Admin)
router.post("/", protect, allowRoles("analyst", "admin"), async (req, res) => {
  const record = await Record.create(req.body);
  res.json(record);
});

// GET (Analyst + Admin)
router.get("/", protect, allowRoles("analyst", "admin"), async (req, res) => {
  const records = await Record.find();
  res.json(records);
});

module.exports = router;