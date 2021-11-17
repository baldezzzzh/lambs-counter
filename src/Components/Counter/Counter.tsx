import React, {Dispatch, SetStateAction} from "react";
import classes from "./Counter.module.css";
import CounterBlock from "./CounterBlock";
import CounterButtons from "./CounterButtons";
import Noerror from "../Noerror";
import Error from "../Error";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../redux/store";
import {CounterType} from "../../redux/counter-reducer";

type CounterPropsType = {

}

const Counter = ({}: CounterPropsType) => {

    let error = useSelector<RootReducerType, boolean>(state => state.counter.error)

    return (
        <div className={'counter'}>
            {error ? <Error/> : <Noerror/>}
            <CounterButtons/>
        </div>
    )
}

export default Counter