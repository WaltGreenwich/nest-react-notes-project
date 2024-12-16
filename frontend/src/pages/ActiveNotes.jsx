import React, { useEffect, useState } from "react";
import NotesList from "../components/NotesList";
import { getNotes } from "../services/api";

const ActiveNotes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      const allNotes = await getNotes();
      const activeNotes = allNotes.filter((note) => !note.archived);
      setNotes(activeNotes);
    };

    fetchNotes();
  }, []);

  const handleArchive = async (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Active Notes</h1>
      <NotesList notes={notes} onArchive={handleArchive} />
    </div>
  );
};

export default ActiveNotes;
