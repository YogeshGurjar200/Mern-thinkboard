import React from "react";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { formatDate } from "../lib/utils.js";
import { Link } from "react-router";
import toast from "react-hot-toast";
import api from "../lib/axios.js";
api;

function NoteCard({ note, setNotes }) {
  const handleDelete = async (e, id) => {
    e.preventDefault(); //get rid of navigation behavior
    if (!window.confirm("are you sure to delete")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("deleted successfully");
      setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (error) {
      toast.error("failed to delete");
    }
  };
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 
  border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NoteCard;
