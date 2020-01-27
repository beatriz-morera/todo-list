import React, { useState } from 'react';

import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const addTaskHandler = text => {
    const newTasks = [...tasks, text];
    setTasks(newTasks);
  };

  const removeTaskHandler = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  //const [taskCompleted, setTaskCompleted] = useState(false);

  return (
    <main>
      <Header />
      <AddTask onChange={addTaskHandler} />
      <section>
        {tasks.map((task, index) => (
          <Task
            task={task}
            key={index}
            remove={() => removeTaskHandler(index)}
            //completed
            //style={{ textDecoration: taskCompleted ? 'line-through' : '' }}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
