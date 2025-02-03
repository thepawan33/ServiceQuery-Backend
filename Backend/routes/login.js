const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  loginController,
  refreshTokenController,
} = require("../controllers/login");
const { verifyHeader } = require("../middleware");

router.post(
  "/login",
  verifyHeader,
  passport.authenticate("local", { failureFlash: true }),
  loginController
);

router.post("/token", verifyHeader, refreshTokenController);

module.exports = router;
