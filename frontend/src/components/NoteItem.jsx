const NoteItem = ({ note, onArchive, onUnarchive, onEdit, onDelete }) => {
  return (
    <li className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
      <div>
        <h3 className="text-xl font-semibold">{note.title}</h3>
        <p>{note.content}</p>
      </div>
      <div className="space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded"
          onClick={() => onEdit(note)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-1 rounded"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
        {onArchive && !note.archived && (
          <button
            className="bg-yellow-500 text-white px-4 py-1 rounded"
            onClick={() => onArchive(note.id)}
          >
            Archive
          </button>
        )}
        {onUnarchive && note.archived && (
          <button
            className="bg-green-500 text-white px-4 py-1 rounded"
            onClick={() => onUnarchive(note.id)}
          >
            Unarchive
          </button>
        )}
      </div>
    </li>
  );
};

export default NoteItem;
