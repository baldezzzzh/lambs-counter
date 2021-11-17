import React from "react";
import classes from "./Counter.module.css";
import {CounterType} from "../../redux/counter-reducer";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../redux/store";




const CounterBlock = () => {

    let maxValue = useSelector<RootReducerType, number>(state => state.counter.maxValue)
    let counter = useSelector<RootReducerType, number>(state => state.counter.counter)

    return (
        <p className={`${classes.text} ${counter === maxValue ? classes.error : ''}`}>{counter}</p>
    )
}

export default CounterBlock