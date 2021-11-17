import React, {Dispatch, SetStateAction} from "react";
import {log} from "util";
import {on} from "cluster";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../redux/store";
import {setDisabledExceptionAC} from "../../redux/counter-reducer";

type ValueLinePropsType = {
    name: string
    getInputValue: (value : number) => void
    value: number
}


const ValueLine = ({name, getInputValue, value}:ValueLinePropsType) => {
    let error = useSelector<RootReducerType, boolean>(state => state.counter.error)
    let dispatch = useDispatch()
    const onChangeHandler = (e: any) => {
        const inputValue = +e.currentTarget.value
        getInputValue(inputValue)
        dispatch(setDisabledExceptionAC(true))
    }

    return(
        <div className={'valueLine'}>
            <p>{name}</p>
            <input value={value} type="number" onChange={ onChangeHandler} className={ error ? 'errorInput' : ''}/>
        </div>
    )
}
export default ValueLine