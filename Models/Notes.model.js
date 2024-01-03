const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  note: { type: String, required: true },
  label: { type: String, required: true },
  userId: { type: String, required: true },
});

const NoteModel = mongoose.model("note", noteSchema);

module.exports = NoteModel;
