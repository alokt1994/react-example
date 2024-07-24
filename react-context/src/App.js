import "./App.css";
import NoteState from "./context/notes/NoteState";
import ExampleContext from "./exampleContext/ExampleContext";
function App() {
  return (
    <div>
      <NoteState>
        <ExampleContext></ExampleContext>
      </NoteState>
    </div>
  );
}

export default App;
