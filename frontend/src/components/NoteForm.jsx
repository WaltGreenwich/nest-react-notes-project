import { useState, useEffect } from "react";
import { createNote, editNote } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function NoteForm({ onAddNote, selectedNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    }
  }, [selectedNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedNote) {
      const updatedNote = await editNote(selectedNote.id, { title, content });
      onAddNote(updatedNote);
    } else {
      const newNote = await createNote({ title, content, archived: false });
      onAddNote(newNote);
    }
    navigate("/active");
  };

  return (
    <form className="p-4 max-w-xl mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4 text-center">
        {selectedNote ? "Edit Note" : "Add Note"}
      </h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-4 w-full"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 mb-4 w-full"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        {selectedNote ? "Edit Note" : "Add Note"}
      </button>
    </form>
  );
}
