const express = require("express");
const router = express.Router();
const wrapAysnc = require("../utils/wrapAysnc");
const ExpressError = require("../utils/ExpressError");
const { verifyToken, querySchema, verifyHeader } = require("../middleware");
const {
  getQueryController,
  getQueryByIdController,
  addQueryController,
  deleteAllQueryController,
  deleteOneController,
} = require("../controllers/query.js");

const queryValidate = (req, res, next) => {
  const { error } = querySchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

router.get("/query", verifyHeader, verifyToken, wrapAysnc(getQueryController));

router.get(
  "/search/:id",
  verifyHeader,
  verifyToken,
  wrapAysnc(getQueryByIdController)
);
router.post(
  "/query",
  verifyHeader,
  queryValidate,
  wrapAysnc(addQueryController)
);

router.delete(
  "/query/delete/all",
  verifyHeader,
  verifyToken,
  wrapAysnc(deleteAllQueryController)
);
router.delete(
  "/query/delete/:id",
  verifyHeader,
  verifyToken,
  wrapAysnc(deleteOneController)
);

module.exports = router;
