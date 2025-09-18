import { useEffect, useState } from "react";
import "./ToDo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const ToDo = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) {
            alert("Task cannot be empty !!");
            return;
        }

        if (task.includes(inputValue)) {
            alert("Task already exists !!");
            setInputValue("");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue("");
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString("en-US");
            setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="todo-container">
            <header>
                <h1>ToDo List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            type="text"
                            className="todo-input"
                            autoComplete="off"
                            value={inputValue}
                            onChange={(event) => handleInputChange(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add Task</button>
                    </div>
                </form>
            </section>
            <section>
                <ul className="task-list">
                    {
                        task.map((curTask, index) => {
                            return (
                                <li key={index} className="todo-item">
                                    <span>{curTask}</span>
                                    <button className="check-btn">
                                        <MdCheck />
                                    </button>
                                    <button className="delete-btn">
                                        <MdDeleteForever />
                                    </button>
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
        </section>
    );
};
