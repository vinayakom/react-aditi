import { MdCheck, MdDeleteForever } from "react-icons/md";

export const ToDoList = ({ data, checked, onHandleDeleteTask, onHandleCheckedTask }) => {
    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="check-btn" onClick={() => onHandleCheckedTask(data)}>
                <MdCheck />
            </button>
            <button className="delete-btn" onClick={() => onHandleDeleteTask(data)}>
                <MdDeleteForever />
            </button>
        </li>
    )
};
