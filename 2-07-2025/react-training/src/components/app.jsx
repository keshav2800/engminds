import { useState } from "react";


function App() {
    const [s1, setDetail] = useState({
        name: "rahul",
        location: "bengaluru",
    })

    function handleCount(){
        console.log(s1.name);
        s1.name = "keshav";
        console.log(s1.name);

        setDetail({
            name: "keshav",
            location: "bengaluru",
        })
        console.log(s1.name);

        setDetail((data) => {
            data.name = "keshav";
            return data;
        })
    }

    return (
        <>
        <button onClick={handleCount}>Click me</button>
            <h1> count {s1.name}</h1>
            
        </>
    )
}