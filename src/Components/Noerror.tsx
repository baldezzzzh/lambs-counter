import React from "react";
import CounterBlock from "./Counter/CounterBlock";
import {CounterType} from "../redux/counter-reducer";
import {useSelector} from "react-redux";
import {RootReducerType} from "../redux/store";




const Noerror = () => {

    let counter = useSelector<RootReducerType, number>(state => state.counter.counter)
    return(
        <div>
            {counter === 0 ? <p className={'counter_entry-text'}>Enter values and press Set</p> : <CounterBlock/>}
        </div>
    )
}

export default Noerror