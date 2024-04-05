const express = require("express");
const router = express.Router();
const serSpreadSheet = require("../services/spreadSheet");

router.post("", serSpreadSheet.postWebhook);

module.exports = router;
