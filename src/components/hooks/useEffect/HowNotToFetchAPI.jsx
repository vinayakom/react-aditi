import { useEffect, useState } from "react";
import "./Pokemon.css"

export const HowNotToFetchAPI = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setApiData(data)        
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container effect-container">
            <ul>Data:
                {
                    apiData.map((curData) => {
                        return <li key={curData.id}> {curData.title} </li>
                    })
                }
            </ul>
        </div>
    );
};
