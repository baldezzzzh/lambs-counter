import React, {Dispatch, SetStateAction} from "react";
import ValueLine from "./ValueLine";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../redux/store";
import {CounterType, getMaxValueAC, getStartValueAC, setDisabledAC, setErrorAC} from "../../redux/counter-reducer";

type CounterValuesSetterPropsType = {

}

const CounterValuesSetter = ({}:CounterValuesSetterPropsType) => {


    let startValue = useSelector<RootReducerType, number>(state => state.counter.startValue)
    let maxValue = useSelector<RootReducerType, number>(state => state.counter.maxValue)
    let dispatch = useDispatch()
    const getStartInputValue = (value : number) => {
        dispatch(getStartValueAC(value))
        startValue = value
        if (startValue < 0){
            dispatch(setErrorAC(true))
            dispatch(setDisabledAC(true))
        } else if (startValue === maxValue) {
            dispatch(setErrorAC(true))
            dispatch(setDisabledAC(true))
        } else if (startValue > maxValue) {
            dispatch(setErrorAC(true))
            dispatch(setDisabledAC(true))
        }
        else{
            dispatch(setErrorAC(false))
            dispatch(setDisabledAC(false))
        }

    }
    const getMaxInputValue = (value: number) =>{
        dispatch(getMaxValueAC(value))
        maxValue = value
        if (maxValue < 0) {
            dispatch(setErrorAC(true))
            dispatch(setDisabledAC(true))
        }
        else if ( startValue > maxValue){
            dispatch(setErrorAC(true))
            dispatch(setDisabledAC(true))
        }
        else if ( startValue < 0 ){
            dispatch(setErrorAC(true))
            dispatch(setDisabledAC(true))
        }
        else {
            dispatch(setErrorAC(false))
            dispatch(setDisabledAC(false))
        }
    }




    return(
        <div>
            <ValueLine name={'max value'} getInputValue={getMaxInputValue}  value={maxValue}/>
            <ValueLine name={'start value'} getInputValue={getStartInputValue}  value={startValue}/>
        </div>
    )
}

export default CounterValuesSetter