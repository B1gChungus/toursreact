import React, { useState } from "react";
import List from "./components/list";
import data from "./utils/data"
// import Nothing from "./components/nothing"

// const url = "https://course-api.com/react-tours-project"
// async function fart() {
//     try {
//         let joe = await fetch(url)
//         return await joe.json()
//     } catch {
//         console.log("chungus")
//     }
//     //const lol = await data.json()
// }

function App() {
    var [tours, setTours] = useState(data)
    //setTours(fart())
    const removeTour = (id) => {
        let items = tours.filter((tour) => {
            return tour.id !== id
        })
        console.log(items)
        setTours(items)
    }
    // useEffect(function () {
    //     let a = document.getElementById("nothing")
    //     if (tours.length <= 0) {
    //         a.style.display = "block"
    //     } else {
    //         a.style.display = "none"
    //     }
    // }, [tours])
    const refresh = () => {
        setTours(data)
    }
    return (
        <div>
            <h1>THE FOG IS COMING</h1>
            <List items={tours} removet={removeTour} />
            {/* <Nothing refresh={refresh} /> */}
            <button id="nothing" onClick={() => { refresh() }}>Refresh List</button>
        </div>
    )
}

export default App