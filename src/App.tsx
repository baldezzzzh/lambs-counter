import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Components/Counter/Counter";
import CounterSetter from "./Components/CounterSetter/CounterSetter";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./redux/store";
import {CounterType, incCounterAC, resetCounterAC} from "./redux/counter-reducer";

function App() {

    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         // setCounter(newValue)
    //     }
    // }, [])

    // useEffect( () => {
    //     localStorage.setItem('counterValue', JSON.stringify(counter))
    // }, [counter] )
    //
    // useEffect(() => {
    //     let startValueAsString = localStorage.getItem('startValue')
    //     if (startValueAsString) {
    //         let newValue = JSON.parse(startValueAsString)
    //         // setStartValue(newValue)
    //     }
    // }, [])

    // useEffect( () => {
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    // }, [startValue] )
    //
    // useEffect(() => {
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if (maxValueAsString) {
    //         let newValue = JSON.parse(maxValueAsString)
    //         setMaxvalue(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [maxValue])







    return (
        <div className="App">
            <CounterSetter/>
            <Counter/>
        </div>
    );
}

export default App;
