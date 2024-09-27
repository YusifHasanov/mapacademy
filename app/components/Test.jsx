import React, { useEffect, useState } from 'react'


const Test = () => {
    const [state, setState] = useState(null);


    const fetchAndSetState = () => {

        // burda state set olunur
    }
    const updateState = () => {
        // burda update
    }

    useEffect(() => {
        fetchAndSetState();
    }, [])
    return (
        <div>
            <button onClick={updateState} >click</button>
        </div>
    )
}

export default Test