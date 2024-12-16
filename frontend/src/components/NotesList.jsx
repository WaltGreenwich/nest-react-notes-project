import NoteItem from "./NoteItem";

const NotesList = ({ notes, onArchive, onUnarchive, onEdit, onDelete }) => {
  if (!notes || notes.length === 0) {
    return <p className="text-gray-500 text-center">No notes to display.</p>;
  }

  return (
    <ul className="space-y-4">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
        />
      ))}
    </ul>
  );
};

export default NotesList;
