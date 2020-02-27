import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';

import { add, remove, toggle, selectTodos } from './features/todos/todosSlice';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const addTaskHandler = useCallback(text => dispatch(add(text)), [dispatch]);
  const removeTaskHandler = useCallback(task => dispatch(remove(task)), [dispatch]);
  const toggleTaskHandler = useCallback(task => dispatch(toggle(task)), [dispatch]);

  return (
    <main>
      <Header />
      <AddTask onChange={addTaskHandler} />
      <section>
        {todos.map((todo, id) => (
          <Task
            task={todo}
            key={id}
            onRemove={removeTaskHandler}
            onToggleComplete={toggleTaskHandler}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
