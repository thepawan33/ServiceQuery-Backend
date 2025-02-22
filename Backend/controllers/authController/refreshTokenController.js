const jwt = require("jsonwebtoken");
const ExpressError = require("../../utils/ExpressError");
const RfToken = require("../../models/refreshTokenModel");

module.exports.refreshTokenController = async (req, res) => {
  const refreshToken = req.signedCookies.refresh_Token;

  if (!refreshToken)
    throw new ExpressError(401, "Refresh token missing or invalid");

  const dbRefreshToken = await RfToken.findOne({ refreshToken: refreshToken });

  if (!dbRefreshToken) throw new ExpressError(404, "Refresh Token Not Found!");

  const compaire = dbRefreshToken.refreshToken.includes(refreshToken);

  if (!compaire) throw new ExpressError(401, "Not Authorized!");

  jwt.verify(refreshToken, process.env.TOKEN_SECRET, (err, user) => {
    if (err) throw new ExpressError(403, "Invalid or expired refresh token");

    const { username } = user;

    const accessToken = jwt.sign({ username }, process.env.TOKEN_SECRET, {
      expiresIn: "15m",
    });

    res.send(accessToken);
  });
};
