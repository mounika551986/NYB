
import { useState } from "react";


function NotesApp() {

  const [note, setNote] = useState("")
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  function addNote() {
    if (note.trim() !== "") {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          text: note
        }
      ]);

      setNote("");
    }
  }

  function deleteNote(id) {
    setNotes(notes.filter((item) => item.id !== id));
  }

  const filteredNotes = notes.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Notes Application</h1>

      <input
        type="text"
        placeholder="Search notes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <textarea
        placeholder="Write a note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addNote}>
        Add Note
      </button>

      {
        filteredNotes.map((item) => (
          <div key={item.id}>
            <p>{item.text}</p>

            <button onClick={() => deleteNote(item.id)}>
              Delete
            </button>
          </div>
        ))
      }

    </div>
  );
}

export default NotesApp;
