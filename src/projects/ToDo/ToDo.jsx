import "./ToDo.css";
import { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";
import { ToDoDateTime } from "./ToDoDateTime";

export const ToDo = () => {

    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {

        if (!inputValue) {
            alert("Task cannot be empty !!");
            return;
        }

        if (task.includes(inputValue)) {
            alert("Task already exists !!");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);
    }

    const handleDeleteTask = (curTask) => {
        console.log(curTask);
        const updatedTasks = task.filter((t) => t !== curTask);
        setTask(updatedTasks);
    };

    const handleClearAllTasks = () => {
        setTask([]);
    };

    return (
        <section className="todo-container">
            <header>
                <h1>ToDo List</h1>
                <ToDoDateTime />
            </header>

            <ToDoForm onAddToDo={handleFormSubmit} />

            <section>
                <ul className="task-list">
                    {
                        task.map((curTask, index) => {
                            return (
                                <ToDoList
                                    key={index}
                                    data={curTask}
                                    onHandleDeleteTask={handleDeleteTask} />
                            );
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearAllTasks}>Clear all</button>
            </section>
        </section>
    );
};
