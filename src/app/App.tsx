import React, {useEffect, useRef, useState} from 'react';
import '../App.css';
import Table from "../components/Table/Table";

const App: React.FC = () => {
    const num1 = useRef<HTMLInputElement>(null)
    const num2 = useRef<HTMLInputElement>(null)
    const numRange1 = useRef<HTMLInputElement>(null)
    const numRange2 = useRef<HTMLInputElement>(null)
    const numRange3 = useRef<HTMLInputElement>(null)
    const reserve = useRef<HTMLInputElement>(null)

    const [isTableVisible, setIsTableVisible] = useState<boolean>(false)

    const [yearsArray, setYearsArray] = useState<number[]>([])
    const [uniqYearsArray, setUniqYearsArray] = useState<number[]>([])

    const onSubmitClick = () => {
        let years: number[] = []
        for (let i = Number(numRange1.current?.value); i<= Number(numRange3.current?.value); i++) {
            for (let j = Number(numRange1.current?.value); j<= Number(numRange3.current?.value); j++) {
                for (let k = Number(numRange1.current?.value); k<= Number(numRange3.current?.value); k++) {
                    let years1 = Number(num1.current?.value) + j
                    let years2 = Number(num2.current?.value) + k
                    let years3 = i

                    years.push(Math.max(years1,years2,years3))
                }
            }
        }
        setYearsArray(years)
    }

    useEffect(() => {
        console.log(yearsArray)
        if (yearsArray.length !== 0) {
            setIsTableVisible(true)
        }
        setUniqYearsArray(yearsArray.filter((elem, i) => i === yearsArray.indexOf(elem)))
    },[yearsArray])

    return (
        <div className="App">
            <div>
                <div>
                    <span>Cтроительство корпусов займет: </span>
                    <input ref={num1} type="number"></input>
                </div>

                <div>
                    <span>Разработка модели изделия займет: </span>
                    <input ref={num2} type="number"></input>
                </div>

                <div>
                    <span>Наем рабочей силы, монтаж оборудования и отладка модели изделия могут занять:</span>
                    <input ref={numRange1} type="number"></input>
                    <input ref={numRange2} type="number"></input>
                    <input ref={numRange3} type="number"></input>
                </div>
                <div>
                    <span>Резерв (ускоряет строительство на год):</span>
                    <input ref={reserve} type="number"/>
                </div>
            </div>
            <button onClick={onSubmitClick}>Расчитать</button>
            <Table isVisible={isTableVisible} years={uniqYearsArray}/>
        </div>
    );
};

export default App;
