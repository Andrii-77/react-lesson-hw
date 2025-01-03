import {useState} from "react";

const App = () => {

    // eslint-disable-next-line prefer-const
    let [counter, setCounter] = useState<number>(0);
    console.log('mount');
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => {
                setCounter(++counter);
            }}>increment
            </button>
            <button onClick={() => {
                // setCounter(--counter);
                setCounter(prevState => {
                    return --prevState;
                });
            }}>decrement
            </button>

        </div>
    );
};

export default App;