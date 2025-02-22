const express = require("express");
const router = express.Router();
const passport = require("passport");
const { verifyHeader } = require("../middleware");
const wrapAysnc = require("../utils/wrapAysnc");

const {
  loginController,
} = require("../controllers/authController/loginController");
const {
  refreshTokenController,
} = require("../controllers/authController/refreshTokenController");

router.post(
  "/login",
  verifyHeader,
  passport.authenticate("local", { failureFlash: true }),
  wrapAysnc(loginController)
);

router.post("/token", verifyHeader, wrapAysnc(refreshTokenController));

module.exports = router;
