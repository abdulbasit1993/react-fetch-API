import React, { useState, useEffect } from "react";
import "../App.css";

function FetchAPI() {

    const [data, setData] = useState([]);

    const apiGet = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        })
        .catch((error) => {
            alert("There was an Error Fetching from API:  " + error);
        });
    };

    useEffect(() => {
        apiGet();
    }, []);

    return (
        <div>
            <h2 className="heading">React Fetch Data From API</h2>
            <h3 className="heading">Made by: <strong><i>Abdul Basit Mehtab</i></strong></h3>
            <br />
            <button onClick={apiGet} className="fetch-btn">Fetch Data from API</button>
            <br/>
            <div className="data-container">
                <ul className="data-list">
                    {data.map((item) => (
                        <li key={item.id}>
                        {item.userId}: {item.title}
                        </li>
                        
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default FetchAPI;