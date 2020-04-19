const mongoose = require("mongoose");
const itemSchema = require('./item').schema;

const ListSchema = new mongoose.Schema(
  {
    name: String,
    items: [itemSchema],
    createdAt: Date,
    updatedAt: Date
  },
  {
    id: true,
    timestamps: true,
    strict: false
  }
);

module.exports = mongoose.model("List", ListSchema);
