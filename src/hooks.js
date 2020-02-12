import { useState } from 'react';

const STORAGE_KEY = 'tasks';

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function getTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

export function useTasks() {
  const [tasks, setTasks] = useState(getTasks());
  const updateTasks = tasks => {
    setTasks(tasks);
    saveTasks(tasks);
  };
  return [tasks, updateTasks];
}
