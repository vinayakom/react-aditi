import { useState } from "react";

//const users

export const DerivedState = () => {

    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "David", age: 38 },
    ]);

    const userCount = users.length;
    const averageAge = (users.reduce((sum, user) => sum + user.age, 0) / userCount).toFixed(2);
    console.log({ users });

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
            <p>Total Users: {userCount}</p>
            <p>Average Age: {averageAge}</p>
        </div>
    );
};
