import { createSlice } from '@reduxjs/toolkit';

const newId = () =>
  Math.random()
    .toString()
    .replace('.', '');

const newTodo = text => ({
  id: newId(),
  text,
  isCompleted: false
});

export const slice = createSlice({
  name: 'todos',
  initialState: {
    list: []
  },
  reducers: {
    add: (state, action) => {
      state.list.push(newTodo(action.payload));
    },
    remove: (state, action) => {
      const { id } = action.payload;
      state.list = state.list.filter(t => t.id !== id);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const task = state.list.find(t => t.id === id);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    }
  }
});

export const selectTodos = state => state.todos.list;

export const { add, remove, toggle } = slice.actions;

export default slice.reducer;
