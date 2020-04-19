const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    name: String,
    createdAt: Date,
    updatedAt: Date
  },
  {
    id: true,
    timestamps: true,
    strict: false
  }
);

module.exports = mongoose.model("Item", ItemSchema);
