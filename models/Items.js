const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  info: { type: String, required: true },
  inCart: { type: Boolean, required: true },
  count: { type: Number, required: true },
  total: { type: Number, required: true }
});

module.exports = Items = mongoose.model("items", ItemsSchema);
