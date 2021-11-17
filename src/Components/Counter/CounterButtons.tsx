import React from "react";
import classes from "./Counter.module.css";
import CounterButton from "./CounterButton";
import {Simulate} from "react-dom/test-utils";
import {CounterType, incCounterAC, resetCounterAC} from "../../redux/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../redux/store";


type CounterButtonsPropsType = {

}

const CounterButtons = ({}:CounterButtonsPropsType) => {

    let startValue = useSelector<RootReducerType, number>(state => state.counter.startValue)
    let counter = useSelector<RootReducerType, number>(state => state.counter.counter)
    let maxValue = useSelector<RootReducerType, number>(state => state.counter.maxValue)
    let error = useSelector<RootReducerType, boolean>(state => state.counter.error)
    let disabledException = useSelector<RootReducerType, boolean>(state => state.counter.disabledException)

    let dispatch = useDispatch();

    const incCounter = () => {
        if (counter < maxValue) {
            dispatch(incCounterAC())
        }
    }
    const resetCounter = () => {
        if (counter > 0 && counter <= maxValue){
            dispatch(resetCounterAC(startValue))
        }
    }



    return(
        <div className={classes.buttons}>
            <CounterButton disabled={counter === maxValue || error || disabledException} name={'inc'} callback={incCounter}/>
            <CounterButton disabled={counter === 0} name={'reset'} callback={resetCounter}/>
        </div>
    )
}

export default  CounterButtons