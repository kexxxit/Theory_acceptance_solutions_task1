import React, {useRef} from 'react';
import './App.css';

function App() {
    let num1 = useRef<HTMLInputElement>(null)
    let num2 = useRef<HTMLInputElement>(null)
    let numRage1 = useRef<HTMLInputElement>(null)
    let numRage2 = useRef<HTMLInputElement>(null)
    let numRage3 = useRef<HTMLInputElement>(null)

    // let []

    let submitClick = () => {

    }

    return (
        <div className="App">
            <div>
                <div>
                    <span>ta:</span>
                    <input ref={num1} type="number"></input>
                </div>

                <div>
                    <span>tb:</span>
                    <input ref={num2} type="number"></input>
                </div>

                <div>
                    <span>Возможеные tc, td, te:</span>
                    <input ref={numRage1} type="number"></input>
                    <input ref={numRage2} type="number"></input>
                    <input ref={numRage3} type="number"></input>
                </div>
            </div>
            <button onClick={submitClick}>Расчитать</button>
        </div>


    );
}

export default App;
