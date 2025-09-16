import { useState } from "react";

//const users

export const DerivedState = () => {

    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "David", age: 40 },
    ]);

    return (
        <div className="main-div">
            <h2>User List</h2>
            <ul>
                {users.map((user, index) => {
                    return (
                        <li key={index}>
                            {user.name} - {user.age} years old
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};