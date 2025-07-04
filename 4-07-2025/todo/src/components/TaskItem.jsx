import React, { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

export default function TaskItem({ task, index, onToggleComplete, onRemove, onEdit, isEditing, startEdit, cancelEdit }) {
  const [editValue, setEditValue] = useState(task.text);

  const completedClasses = task.completed ? "taskitem-completed" : "";
  const editingClasses = isEditing ? "taskitem-editing" : "";

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editValue.trim()) {
      onEdit(editValue);
    }
  };

  const handleCancel = () => {
    cancelEdit();
    setEditValue(task.text);
  };

  if (isEditing) {
    return (
      <li className={`taskitem ${editingClasses}`}>
        <form className="taskitem-edit-form" onSubmit={handleEditSubmit}>
          <input
            className="taskinput-input"
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            autoFocus
          />
          <button type="submit" className="taskinput-btn update">Update</button>
          <button type="button" className="taskinput-btn cancel" onClick={handleCancel}>X</button>
        </form>
      </li>
    );
  }

  return (
    <li
      className={`taskitem ${completedClasses}`}
      onClick={e => {
        if (e.target.tagName !== 'BUTTON') onToggleComplete();
      }}
      tabIndex={0}
      aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
    >
      <div className="taskitem-main">
        <span className="taskitem-check">{task.completed ? "✔" : ""}</span>
        <span className="taskitem-text">{task.text}</span>
      </div>
      <div className="taskitem-actions">
        <button
          className="taskitem-btn edit"
          onClick={e => { e.stopPropagation(); startEdit(); }}
          aria-label="Edit task"
          disabled={task.completed}
        >
          edit
        </button>
        <button
          className="taskitem-btn remove"
          aria-label="Remove task"
        >
          X
        </button>
      </div>
    </li>
  );
}