import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
import TaskItem from "./TaskItem.jsx";
import Taskinput from "./Taskinput.jsx";

export default function TaskList() {
  const { Task, toggleComplete, removeTask, editTask, clearCompleted } = useContext(TaskContext);
  const [editingIndex, setEditingIndex] = useState(null);

  // Only show button if there is at least one completed task
  const hasCompleted = Task.some(task => task.completed);

  // Clear completed tasks and reset edit state
  const handleClearCompleted = () => {
    clearCompleted();
    setEditingIndex(null);
  };

  return (
    <div className="tasklist-container">
      <div className="todo-controls" style={{ marginBottom: hasCompleted ? 16 : 0 }}>
        {hasCompleted && (
          <button
            className="clear-btn"
            onClick={handleClearCompleted}
            aria-label="Clear completed"
          >
            &#10006; Clear Completed
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






