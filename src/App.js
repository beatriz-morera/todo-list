import React, { useState } from 'react';

import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = text => {
    const newTasks = [...tasks, { text, completed: false }];
    setTasks(newTasks);
  };

  const removeTaskHandler = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const completedTaskHandler = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <main>
      <Header />
      <AddTask onChange={addTaskHandler} />
      <section>
        {tasks.map((task, index) => (
          <Task
            task={task}
            key={index}
            onRemove={() => removeTaskHandler(index)}
            onToggleComplete={() => completedTaskHandler(index)}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
