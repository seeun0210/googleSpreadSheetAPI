const express = require("express");
const router = express.Router();
const routerWebhook = require("./webhook");

router.use("/webhook", routerWebhook);

module.exports = router;
