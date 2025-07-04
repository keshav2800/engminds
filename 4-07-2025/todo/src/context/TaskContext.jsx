import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [Task, setTask] = useState([]);

    // Add a new task
    const addTask = (newTask) => {
        setTask([...Task, { text: newTask, completed: false }]);
    }

    // Remove a task by index
    const removeTask = (index) => {
        setTask(Task.filter((_, i) => i !== index));
    };

    // Toggle completed state
    const toggleComplete = (index) => {
        setTask(Task.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        ));
    };

    // Edit a task's text
    const editTask = (index, newText) => {
        setTask(Task.map((task, i) =>
            i === index ? { ...task, text: newText } : task
        ));
    };

    // Clear all tasks
    const clearAll = () => {
        setTask([]);
    };

    // Clear only completed tasks
    const clearCompleted = () => {
        setTask(Task.filter(task => !task.completed));
    };

    return (
        <TaskContext.Provider value={{ Task, addTask, removeTask, toggleComplete, editTask, clearAll, clearCompleted }}>
            {children}
        </TaskContext.Provider>
    )
}