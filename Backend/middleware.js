const jwt = require("jsonwebtoken");
const Joi = require("joi");

module.exports.querySchema = Joi.object({
  name: Joi.string().max(48).required(),
  email: Joi.string().required(),
  contact: Joi.number().required(),
  purpose: Joi.string().required(),
  message: Joi.string().required(),
});

module.exports.verifyHeader = (req, res, next) => {
  const authHeader = req.headers.authorization?.trim();

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  if (!authHeader.startsWith(`${process.env.API_SECRET}`)) {
    return res.status(403).json({ message: "Invalid authorization header" });
  }
  next();
};

module.exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!req.headers || !req.headers.authorization) {
    return res
      .status(400)
      .json({ message: "Authorization header missing or Auth" });
  }

  if (!authHeader.startsWith(`${process.env.API_SECRET} `)) {
    return res
      .status(400)
      .json({ message: "Authorization header is malformed" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Authorization token not found" });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "Invalid or expired authorization token" });
    }
    req.user = decoded;
    next();
  });
};
