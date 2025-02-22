const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const rfTokenSchema = new Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "7d",
  },
});

module.exports = mongoose.model("RfToken", rfTokenSchema);
