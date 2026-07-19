import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import Heading from "./components/Heading/Heading";

function App() {
  const [expenseList, setExpenseList] = useState([]);
  return (
    <>
      <Heading />
      <main>
        <div className="formWrapper">
          <ExpenseForm
            expenseList={expenseList}
            setExpenseList={setExpenseList}
          />
        </div>
      </main>
    </>
  );
}

export default App;
