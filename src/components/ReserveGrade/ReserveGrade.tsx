import React, {useEffect, useState} from "react";
import {ReserveGradeProps} from "../../utils/types";

const ReserveGrade: React.FC<ReserveGradeProps> = (props) => {
    const [maxProbability, setMaxProbability] = useState<number>(0)
    const [maxProbabilityYear, setMaxProbabilityYear] = useState<number>(0)
    const [index, setIndex] = useState<number>(-1)

    const yearsLength = props.years.length

    useEffect(()=> {
        console.log(props.uniqYears)
        props.uniqYears.forEach((elem, index) => {

            const probability = props.years.filter(filterElem => filterElem === elem).length/yearsLength
            console.log(elem, probability)
            if (maxProbability <= probability) {
                setMaxProbability(probability)
                setMaxProbabilityYear(elem)
                setIndex(index)
                console.log(elem)
            }
        })
    },[props])

    return <div>
        <span>Принцип максимального правдоподобия: Вероятнее всего строительство закончится за {maxProbabilityYear} с прибылью {props.profits[index]}</span>
    </div>
}

export default ReserveGrade