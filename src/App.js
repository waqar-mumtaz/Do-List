import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Todo from './components/Todo';

function App() {
  return (
    <div className="bg-slate-100 pt-6">
      <div className="App w-[850px] h-screen mx-auto p-10 bg-white ">
        <Navbar />
        <Searchbar />
        <Todo />
      </div>
    </div>
  );
}

export default App;
