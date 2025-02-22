const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const adminSchema = new Schema({});
adminSchema.plugin(passportLocalMongoose);
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
