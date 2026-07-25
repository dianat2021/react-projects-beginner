import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading/Heading";
import TaskForm from "./components/TaskForm/TaskForm";

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <Heading />
      <main>
        <TaskForm setTaskList={setTaskList} />
      </main>
    </>
  );
}

export default App;
