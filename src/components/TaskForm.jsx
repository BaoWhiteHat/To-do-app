import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  // Add a description state
  const [description, setDescription] = useState("");

  // Add a deadline state
  const [deadline, setDeadline] = useState("");

  // Add a priority state
  const [priority, setPriority] = useState("low");

  // Add a completed state
  const [completed, setCompleted] = useState(false);

  // Add a handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      description,
      deadline,
      priority,
      completed,
    };
    addTask(newTask);
    setDescription("");
    setDeadline("");
    setPriority("low");
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
