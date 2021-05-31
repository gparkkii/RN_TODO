import { useState } from 'react';

export default function () {
  const [Tasks, setTasks] = useState({
    1: { id: '1', text: '공부', completed: true },
    2: { id: '2', text: '장고', completed: false },
    3: { id: '3', text: '파이썬', completed: false },
    4: { id: '4', text: '리액트 네이티브', completed: false },
    // 1: { id: '1', text: 'todo_example1_completed', completed: true },
    // 2: { id: '2', text: 'todo_example2_inCompleted', completed: false },
  });

  return { Tasks, setTasks };
}
