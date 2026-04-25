import Student from "./Student";
import "./App.css";

function App() {

  const showMessage = () => {
    alert("Button clicked");
  };

  return (
    <div>
      <h1>Student Information</h1>

      <button onClick={showMessage}>
        Click Me
      </button>

      <Student name="Anish" age="21" course="AIML" />
      <Student name="Abhay" age="21" course="AIML" />
      <Student name="sharavni" age="21" course="AIML" />
    </div>
  );
}

export default App;