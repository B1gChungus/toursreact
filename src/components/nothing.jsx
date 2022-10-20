import React from "react";

function Nothing({ refresh }) {
    return (
        <button id="nothing" onClick={() => { refresh() }}>Refresh List</button>
    )
}

export default Nothing