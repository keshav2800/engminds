import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
import TaskItem from "./TaskItem.jsx";
import Taskinput from "./Taskinput.jsx";

export default function TaskList() {
  const { Task, toggleComplete, removeTask, editTask, clearAll } = useContext(TaskContext);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleClearAll = () => {
    clearAll();
    setEditingIndex(null);
  };

  return (
    <div className="tasklist-container">
      <div className="todo-controls" style={{ marginBottom: Task.length > 0 ? 16 : 0 }}>
        {Task.length > 0 && (
          <button
            className="clear-btn"
            onClick={handleClearAll}
            aria-label="Clear all"
          >
            &#10006; Clear All
          </button>
        )}
      </div>
      {editingIndex === null && <Taskinput />}
      <ul className="tasklist-ul">
        {Task.length > 0 ? (
          Task.map((task, index) => (
            <TaskItem
              task={task}
              key={index}
              index={index}
              onToggleComplete={() => toggleComplete(index)}
              onRemove={() => removeTask(index)}
              onEdit={newText => { editTask(index, newText); setEditingIndex(null); }}
              isEditing={editingIndex === index}
              startEdit={() => setEditingIndex(index)}
              cancelEdit={() => setEditingIndex(null)}
            />
          ))
        ) : (
          <li className="tasklist-empty">
           No Task Added Yet
          </li>
        )}
      </ul>
    </div>
  );
}






