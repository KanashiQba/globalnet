import logo from './logo.svg';
import './App.css';


const [getTaskList, setTaskList] = useState([]);
const jobCollectionRef = collection(db, "tasks");
 
  useEffect(()=>{
    const getTasks = async () => {
      const data = await getDocs(jobCollectionRef);
      setTaskList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getTasks();
  },[])

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
