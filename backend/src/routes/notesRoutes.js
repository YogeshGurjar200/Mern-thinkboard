import express from "express"
import { deleteNoteById, getAllNotes, getNotesById, createNote, updateNoteById } from "../controller/notesController.js"

const router = express.Router()

router.get("/", getAllNotes);
router.get("/:id", getNotesById);

router.post("/", createNote);
router.put("/:id", updateNoteById);
router.delete("/:id", deleteNoteById);

export default router