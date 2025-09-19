import "./ToDo.css";
import { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";
import { ToDoDateTime } from "./ToDoDateTime";
import { getLocalStorageTasks, setLocalStorageTasks } from "./ToDoLocalStorage";

export const ToDo = () => {

    const [task, setTask] = useState(() => getLocalStorageTasks());

    const handleFormSubmit = (inputValue) => {

        const { id, content, checked } = inputValue;

        if (!content) {
            alert("Task cannot be empty !!");
            return;
        }

        // if (task.includes(inputValue)) {
        //     alert("Task already exists !!");
        //     return;
        // }

        const ifTaskContentMatches = task.find((currentTask) => currentTask.content === content);

        if (ifTaskContentMatches) {
            alert("Task already exists !!");
            return;
        }

        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    }

    const handleDeleteTask = (value) => {
        const updatedTasks = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTasks);
    };

    const handleClearAllTasks = () => {
        setTask([]);
    };

    const handleCheckedTask = (content) => {
        const updatedTasks = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked };
            } else {
                return curTask;
            }            
        });
        setTask(updatedTasks);
    };    

    setLocalStorageTasks(task); 

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
                        task.map((curTask) => {
                            return (
                                <ToDoList
                                    key={curTask.id}
                                    data={curTask.content}
                                    checked={curTask.checked}
                                    onHandleDeleteTask={handleDeleteTask}
                                    onHandleCheckedTask={handleCheckedTask}
                                />
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
