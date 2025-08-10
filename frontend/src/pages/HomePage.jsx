import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUi";
import NoteCard from "../components/NoteCard";
import api from "../lib/axios.js";
import NotesNotFound from "../components/NotesNotFound";

function HomePage() {
  const [isRateLimitedUi, setisRateLimitedUi] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setisRateLimitedUi(false);
        toast.success("Notes loaded successfully");
      } catch (error) {
        console.log("error fetching notes", error);
        error.response.status === 429
          ? setisRateLimitedUi(true)
          : toast.error("Failed to load notes");
      } finally {
        setisLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimitedUi && <RateLimitedUi />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {isLoading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}

        {notes.length > 0 && !isRateLimitedUi && (
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}

        {notes.length === 0 && !isRateLimitedUi && <NotesNotFound />}
      </div>
    </div>
  );
}

export default HomePage;
