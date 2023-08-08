import { useState } from 'react';

function Counter () {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter (counter + 1)
    };

    const decrease = () => {
        setCounter (counter - 1)
    };
    return (
        <div className="text-center m-5">
            <h2>Counter</h2>
            <h1> {counter} </h1>
            <div className="m-5">
            <button className="m-2" onClick={increase} >increase</button>
            <button className="m-2" onClick={decrease}>decrease</button>
            </div>
        </div>
    );
}


export default Counter;