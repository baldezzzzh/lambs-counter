import React, {Dispatch, SetStateAction} from "react";
import CounterButton from "../Counter/CounterButton";
import CounterValuesSetter from "./CounterValuesSetter";
import {CounterType, setCounterValueAC} from "../../redux/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../redux/store";



type CounterSetterPropsType = {

 }

const CounterSetter = ({}: CounterSetterPropsType) => {

    let startValue = useSelector<RootReducerType, number>(state => state.counter.startValue)
    let disabled = useSelector<RootReducerType, boolean>(state => state.counter.disabled)

    let dispatch = useDispatch()

    return(
        <div className={'counter'}>
            <CounterValuesSetter />
            <CounterButton  disabled={disabled} name={'Set'} callback={()=>{dispatch(setCounterValueAC(startValue, false))}}/>
        </div>
    )
}

export default CounterSetter