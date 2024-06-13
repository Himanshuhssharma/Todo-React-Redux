import './App.css';
import Alltodos from './components/Alltodos';
import Addtodo from './components/Addtodo';

function App() {
  return (
    <div className="App">
      <Addtodo />
      <Alltodos />
    </div>
  );
}

export default App;
