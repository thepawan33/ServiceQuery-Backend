const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  loginController,
  refreshTokenController,
} = require("../controllers/login");
const { verifyHeader } = require("../middleware");
const wrapAysnc = require("../utils/wrapAysnc");

router.post(
  "/login",
  verifyHeader,
  passport.authenticate("local", { failureFlash: true }),
  wrapAysnc(loginController)
);

router.post("/token", verifyHeader, wrapAysnc(refreshTokenController));

module.exports = router;
