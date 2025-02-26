import React, {useState} from "react"

function Counter () {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(prev => prev + 1);
    }

    const subtractCount = () => {
        setCount(prev => prev - 1);
    }

    return (
    <div>
        <div>
            <h3>{count}</h3>
        </div>
        <div>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
        </div>
    </div>
    )
}

export default Counter;