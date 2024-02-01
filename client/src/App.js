import logo from './logo.svg';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({});

  useEffect(() => {

    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try{
      const response = await axios.get('/');
      setNotes(response.data);
    }catch(error){
      console.error('Error fetching notes:', error);
    }
  };

  const createNote = async () => {
    try{
      const response = await axios.post('/new', newNote);
      setNotes([...notes, response.data]);
      setNewNote({});
    }catch(error){
      console.error('Error creating note: ', error)
    }
  }

  return (
   <div>
    <h1>My Notes</h1>
    <button onClick={fetchNotes}>Fetch Notes</button>
   
   <ul>
    {notes.map((note) => (
      <li key={note._id}>{note.title}</li>
    ))}
   </ul>
   <div>
    <h2>Create New Note</h2>
    <textarea
    placeholder='Content'
    value={newNote.content}
    onChange={(e) => setNewNote({content: e.target.value})}
   / >

  <button onClick={createNote}>Create Note</button>
   </div>
   </div>
  );
};

export default App;
