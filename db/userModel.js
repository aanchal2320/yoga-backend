const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
name: {
    type: String,
    required: [true, "Please enter your name"],
    unique: [true, "Name Exist"],
  },

age: {
    type: Number,
    required: [true, "Please enter your age"],
    unique: false,
  },

gender: {
    type: String,
    enum: ["male", "female", "other"]
},

dateOfJoining: {
    type: String
},

currentBatch: {
    type: String
}
})

module.exports = mongoose.model.Users || mongoose.model("users", UserSchema);
