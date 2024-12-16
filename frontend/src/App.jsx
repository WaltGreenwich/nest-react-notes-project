import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import { getNotes, archiveNote, deleteNote, editNote } from "./services/api";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const allNotes = await getNotes();
      setNotes(allNotes.filter((note) => !note.isArchived));
      setArchivedNotes(allNotes.filter((note) => note.isArchived));
    };
    fetchNotes();
  }, []);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleArchive = async (id) => {
    const updatedNote = await archiveNote(id);
    if (updatedNote.isArchived) {
      setNotes(notes.filter((note) => note.id !== id));
      setArchivedNotes([...archivedNotes, updatedNote]);
    } else {
      setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
      setNotes([...notes, updatedNote]);
    }
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter((note) => note.id !== id));
    setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
  };

  const handleEdit = async (id, updatedNote) => {
    const updatedNoteFromApi = await editNote(id, updatedNote);
    setNotes(notes.map((note) => (note.id === id ? updatedNoteFromApi : note)));
    setArchivedNotes(
      archivedNotes.map((note) => (note.id === id ? updatedNoteFromApi : note))
    );
  };

  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <NoteForm onAddNote={handleAddNote} selectedNote={selectedNote} />
          }
        />
        <Route
          path="/active"
          element={
            <NotesList
              notes={notes}
              onArchive={handleArchive}
              onEdit={handleSelectNote}
              onDelete={handleDelete}
            />
          }
        />
        <Route
          path="/archived"
          element={
            <NotesList
              notes={archivedNotes}
              onArchive={handleArchive}
              onEdit={handleSelectNote}
              onDelete={handleDelete}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
