// ToDoApp.js
import React, { useState, useEffect } from 'react';
import '../styles/ToDoApp.css';

const ToDoApp = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
    const [deletedTasks, setDeletedTasks] = useState(JSON.parse(localStorage.getItem('deletedTasks')) || []);
    const [newTask, setNewTask] = useState('');
    const [taskOwner, setTaskOwner] = useState(''); // New state variable for the task owner
  
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    useEffect(() => {
      localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
    }, [deletedTasks]);
  
    const addTask = () => {
      if (newTask.trim() !== '' && taskOwner.trim() !== '') {
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false, date: new Date(), owner: taskOwner }]);
        setNewTask('');
        setTaskOwner('');
      }
    };

  const updateTask = (taskId, newText) => {
  setTasks(
    tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    )
  );
};

  const deleteTask = (taskId) => {
    const taskToDelete = tasks.find((task) => task.id === taskId);
    setDeletedTasks([...deletedTasks, {...taskToDelete, deleted: true}]);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todo-app">
      <h2>ToDo App</h2>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Who is this task for?"
          value={taskOwner}
          onChange={(e) => setTaskOwner(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTaskCompletion(task.id)}>{task.text} (for {task.owner})</span>
            <span>{task.date.toLocaleString()}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => {
              const newText = prompt('Enter new text for the task:');
              if (newText) {
                updateTask(task.id, newText);
              }
            }}>Edit</button>
          </li>
        ))}
      </ul>
      <h2>Deleted Tasks</h2>
      <ul className="task-list">
        {deletedTasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span>{task.text}</span>
            <span>{task.date.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;