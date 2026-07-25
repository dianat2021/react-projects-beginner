import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading/Heading";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <Heading />
      <main>
        <TaskForm setTaskList={setTaskList} />
        <TaskList taskList={taskList} />
      </main>
    </>
  );
}

export default App;
