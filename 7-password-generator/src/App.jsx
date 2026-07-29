import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="title">Password Generator</h1>
      </header>
      <main>
        <PasswordGenerator />
      </main>
    </>
  );
}

export default App;
