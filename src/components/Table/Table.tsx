import React, {useEffect, useRef} from "react";
import {TableProps} from "../../utils/types";
import styles from "./Table.module.css";

const Table: React.FC<TableProps> = (props) => {

    const inputsRef = useRef<HTMLInputElement[]>([])

    const onChangeInput = () => {
        inputsRef.current.forEach((inputRef) => {
            console.log(inputRef.value)
        })
        console.log(inputsRef)
        console.log(cellsInput)
    }

    const addInputRef = (ref: HTMLInputElement | null) => {
        if (ref) {
            inputsRef.current.push(ref)
            console.log(ref)
        }
    }

    const cells = props.years.map((elem)=><td>{elem}</td>)
    const cellsInput = props.years.map((elem)=><td><input className={styles.table_input} onChange={onChangeInput} ref={(ref) => addInputRef(ref)} type={"number"}/></td>)

    useEffect(()=>{
        inputsRef.current = inputsRef.current.slice(-5)
    }, [props])

    return <table border={1} className={props.isVisible ? styles.table_visible : styles.table_hidden}>
        <tr>
            <td>{props.years[0]-1}</td>
            {cells}
            <td>{props.years[props.years.length-1]+1}</td>
        </tr>
        <tr>
            <td><input className={styles.table_input} onChange={onChangeInput} ref={(ref)=> addInputRef(ref)} type={"number"}/></td>
            {cellsInput}
            <td><input className={styles.table_input} onChange={onChangeInput} ref={(ref)=> addInputRef(ref)} type={"number"}/></td>
        </tr>
    </table>
}

export default Table