import Todolist from './components/Todolist'
import './App.css';

function App() {
  return (
    <>
      <section className="todoapp">
      <Todolist></Todolist>
      </section>
      <footer className="info">
      <p>Click to edit a todo</p>
      <p>Sevgin SERBEST</p>
      </footer>
    </>
  );
}

export default App;
