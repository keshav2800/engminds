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

    const toggleComplete = (index) => {
        setTask(Task.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        ));
    };

    const editTask = (index, newText) => {
        setTask(Task.map((task, i) =>
            i === index ? { ...task, text: newText } : task
        ));
    };

    const clearAll = () => {
        setTask([]);
    };

    const clearCompleted = () => {
        setTask(Task.filter(task => !task.completed));
    };

    return (
        <TaskContext.Provider value={{ Task, addTask, removeTask, toggleComplete, editTask, clearAll, clearCompleted }}>
            {children}
        </TaskContext.Provider>
    )
}