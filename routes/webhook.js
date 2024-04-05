const express = require("express");
const router = express.Router();
const serSpreadSheet = require("../services/spreadSheet");

router.use("/webhook", serSpreadSheet.postWebhook());
