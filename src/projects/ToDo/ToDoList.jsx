import { MdCheck, MdDeleteForever } from "react-icons/md";

export const ToDoList = ({ index, data, onHandleDeleteTask }) => {
    return (
        <li key={index} className="todo-item">
            <span>{data}</span>
            <button className="check-btn">
                <MdCheck />
            </button>
            <button className="delete-btn" onClick={() => onHandleDeleteTask(data)}>
                <MdDeleteForever />
            </button>
        </li>
    )
};