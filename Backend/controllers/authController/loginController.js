const jwt = require("jsonwebtoken");
const Admin = require("../../models/admin");
const RfToken = require("../../models/refreshTokenModel");
const ExpressError = require("../../utils/ExpressError");

module.exports.loginController = async (req, res) => {
  let { username } = req.body;

  const accessToken = jwt.sign({ username }, process.env.TOKEN_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign({ username }, process.env.TOKEN_SECRET, {
    expiresIn: "7d",
  });

  const admin = await Admin.findOne({ username: username });

  if (!admin) throw new ExpressError(404, "Please Login Again!");

  await RfToken.bulkWrite([
    { deleteMany: { filter: { adminId: admin._id } } },
    {
      insertOne: {
        document: {
          adminId: admin._id,
          refreshToken: refreshToken,
        },
      },
    },
  ]);

  res.cookie("refresh_Token", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    signed: true,
  });

  res.json({ accessToken });
};
