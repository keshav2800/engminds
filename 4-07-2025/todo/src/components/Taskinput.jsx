import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

export default function Taskinput({ editIndex, editValue, onEdit, onCancelEdit }) {
  const [input, setInput] = useState("");
  const { addTask } = useContext(TaskContext);

  useEffect(() => {
    if (editValue !== undefined && editValue !== null) {
      setInput(editValue);
    } else {
      setInput("");
    }
  }, [editValue, editIndex]);

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  const handleEdit = () => {
    if (input.trim() && onEdit) {
      onEdit(input);
      setInput("");
    }
  };

  return (
    <form
      className="taskinput-form"
      onSubmit={e => {
        e.preventDefault();
        if (editIndex !== null && editIndex !== undefined) {
          handleEdit();
        } else {
          handleAdd();
        }
      }}
    >
      <input
        type="text"
        className="taskinput-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={editIndex !== null && editIndex !== undefined ? "Edit your task..." : "Add a new task..."}
        autoFocus
      />
      {editIndex !== null && editIndex !== undefined ? (
        <>
          <button
            type="submit"
            className="taskinput-btn update"
          >
            Upda
          </button>
          <button
            type="button"
            className="taskinput-btn cancel"
            onClick={onCancelEdit}
          >
           X
          </button>
        </>
      ) : (
        <button
          type="submit"
          className="taskinput-btn add"
        >
          Add
        </button>
      )}
    </form>
  );
}
