import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import Heading from "./components/Heading/Heading";
import ExpenseList from "./components/ExpenseList/ExpenseList";

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
        <ExpenseList expenseList={expenseList} />
      </main>
    </>
  );
}

export default App;
