import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';

import { add, remove, toggle, selectTodos } from './features/todos/todosSlice';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  return (
    <main>
      <Header />
      <AddTask onChange={text => dispatch(add(text))} />
      <section>
        {todos.map((todo, id) => (
          <Task
            task={todo}
            key={id}
            onRemove={() => dispatch(remove(todo))}
            onToggleComplete={() => dispatch(toggle(todo))}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
