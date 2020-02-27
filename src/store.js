import { configureStore } from '@reduxjs/toolkit';
import persistState from 'redux-localstorage';

import todos from './features/todos/todosSlice';

export default configureStore({
  reducer: {
    todos
  },
  enhancers: [persistState()]
});
