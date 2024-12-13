import { useState, useEffect } from "react";

const TaskScheduler = () => {
  const [task, setTask] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [dateTime, setDateTime] = useState('');

  const addTask = () => {
    if (taskTitle && dateTime) {
      // Add task to state using functional update
      setTask((prevTask) => [
        ...prevTask,
        { taskTitle: taskTitle, time: dateTime },
      ]);
      
      // Reset input fields
      setTaskTitle('');
      setDateTime('');
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="task title"
        onChange={(e) => setTaskTitle(e.target.value)}
        value={taskTitle}
      />
      <input
        type="datetime-local"
        placeholder="task Date"
        onChange={(e) => setDateTime(e.target.value)}
        value={dateTime}
      />
      <button onClick={addTask}>Create Task</button>

      <ul>
        {task.map((taskItem, index) => (
          <li key={index}>
            {taskItem.taskTitle} - {taskItem.time}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskScheduler;