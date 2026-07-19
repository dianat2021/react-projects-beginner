import "./App.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import Heading from "./components/Heading/Heading";

function App() {
  return (
    <>
      <Heading />
      <main>
        <div className="formWrapper">
          <ExpenseForm />
        </div>
      </main>
    </>
  );
}

export default App;
