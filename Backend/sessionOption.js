const MongoStore = require("connect-mongo");

const store = MongoStore.create({
  mongoUrl: process.env.ATLASDB_URL,
  autoRemove: "native",
  ttl: 7 * 24 * 60 * 60 * 1000,
  touchAfter: 24 * 3600,
  crypto: {
    secret: process.env.SESSION_SECRET,
  },
});

module.exports.sessionOption = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store,
  cookie: {
    sameSite: "none",
    secure: true,
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};
