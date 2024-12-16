import NotesList from "../components/NotesList";

function ArchivedNotes() {
  return (
    <div>
      <h1>Archived Notes</h1>
      <NotesList archived={true} />
    </div>
  );
}

export default ArchivedNotes;
