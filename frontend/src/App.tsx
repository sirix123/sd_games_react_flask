import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

interface Data {
    name: string;
    age: number;
    date: string;
    programming: string;
}

const App = () => {
    const [data, setData] = useState<Data>({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    const fetchAPI = async () => {
        try {
            const response = await fetch("http://localhost:8080/data");
            const data = await response.json();
            console.log("Data from API:", data);
            setData({
                name: data.name,
                age: data.age,
                date: data.date,
                programming: data.programming,
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.date}</p>
                <p>{data.programming}</p>

            </header>
        </div>
    );
}

export default App