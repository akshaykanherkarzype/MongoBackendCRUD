const express = require("express");
const NotesController = express.Router();

const NoteModel = require("../Models/Notes.model");

NotesController.post("/create", async (req, res) => {
  const { title, note, label, userId } = req.body;

  const notesStatus = new NoteModel({ title, note, label, userId });
  await notesStatus.save();
  return res.send({ message: "Note Created", note: notesStatus });
});

NotesController.get("/", async (req, res) => {
  const { userId } = req.body;
  const notes = await NoteModel.find({ userId });
  return res.send(notes);
});

NotesController.patch("/:noteId/edit", async (req, res) => {
  const noteId = req.params.noteId;
  const userId = req.body.userId;
  console.log("userId:", userId);

  const note = await NoteModel.findOne({ _id: noteId });
  if (note.userId === userId) {
    const updated_note = await NoteModel.findOneAndUpdate(
      { _id: noteId },
      req.body,
      { new: true }
    );
    return res.send({ message: "Successfully updated", note: updated_note });
  } else {
    return res.send("You are not Authorized");
  }
});
NotesController.delete("/:noteId/delete", async (req, res) => {
  const noteId = req.params.noteId;
  const userId = req.body.userId;
  const note = await NoteModel.findOne({ _id: noteId });
  if (note.userId === userId) {
    const deleted_note = await NoteModel.findOneAndDelete(
      { _id: noteId },
      { new: true }
    );
    return res.send({ message: "Successfully updated", note: deleted_note });
  } else {
    return res.send("You are not Authorized");
  }
});

module.exports = NotesController;
