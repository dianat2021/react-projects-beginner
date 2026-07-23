import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import Heading from "./components/Heading/Heading";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Total from "./components/Total/Total";

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
        <ExpenseList
          expenseList={expenseList}
          setExpenseList={setExpenseList}
        />
        <Total expenseList={expenseList} />
      </main>
    </>
  );
}

export default App;
