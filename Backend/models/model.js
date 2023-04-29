const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectSchema = new Schema({
  user: {
    type: String,
  },
  objectDesc: {
    type: String,
  },
  objectName: {
    type: String,
  },
  objectPath: {
    type: String,
  },
  objectThumbnail: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const ObjectModel = mongoose.model("model", ObjectSchema);
module.exports = ObjectModel;
