import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);
  const handleClick = () => {
    const text = inputRef.current.value;
    setTasks([...tasks, text]);
    inputRef.current.value = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="App">
      <div className="content-wrapper">
        <header>My Todo list</header>
        <div>
          <input type="text" ref={inputRef} onKeyDown={handleKeyDown} />
          <button onClick={handleClick}>Add Task</button>
        </div>
        <section className="task-container">
          {tasks &&
            tasks.map((taskText, index) => (
              <Task key={index} taskText={taskText} />
            ))}
        </section>
      </div>
    </div>
  );
}

function Task({ taskText }) {
  return (
    <div className="task">
      <span className="task-text">{taskText}</span>
    </div>
  );
}

export default App;
