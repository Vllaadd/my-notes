import logo from './logo.svg';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

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

  return (
   <div>
    <h1>My Notes</h1>
    <button onClick={fetchNotes}>Fetch Notes</button>
   
   <ul>
    {notes.map((note) => (
      <li key={note._id}>{note.title}</li>
    ))}
   </ul>
   </div>
  );
}

export default App;
