const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
name: {
    type: String,

  },

age: {
    type: String,

  },

gender: {
    type: String,
   
},

dateOfJoining: {
    type: String,

},

currentBatch: {
    type: String,
    
}
})

module.exports = mongoose.model.Users || mongoose.model("users", UserSchema);
