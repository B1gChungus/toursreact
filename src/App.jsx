import React, { useState } from "react";
import List from "./components/list";
import data from "./utils/data"

const url = "https://course-api.com/react-tours-project"
async function fart() {
    try {
        let joe = await fetch(url)
        return await joe.json()
    } catch {
        console.log("chungus")
    }
    //const lol = await data.json()
}

function App() {
    var [tours, setTours] = useState(data)
    const removeTour = (id) => {
        let items = tours.filter((tour) => {
            return tour.id !== id
        })
        console.log(items)
        setTours(items)
    }
    return (
        <List items={tours} removet={removeTour} />
    )
}

export default App