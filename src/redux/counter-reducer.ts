import React from "react";

export type CounterType = {
    counter: number
    startValue: number
    maxValue: number
    error: boolean
    disabled: boolean
    disabledException: boolean
}

const initState: CounterType = {
    counter: 0,
    startValue: 0,
    maxValue: 0,
    error: false,
    disabled: false,
    disabledException: false
}

export const counterReducer = ( state: CounterType = initState, action: GenericType ) => {
    switch (action.type){
        case "INC-COUNTER": {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case "RESET-COUNTER": {
            return {
                ...state,
                counter: action.startValue
            }
        }
        case "GET-START-VALUE": {
            return {
                ...state,
                startValue: action.startValue,
            }
        }
        case "SET-START-VALUE": {
            return {
                ...state,
                counter: action.startValue,
                disabledException: action.value
            }
        }
        case "GET-MAX-VALUE": {
            return {
                ...state,
                maxValue: action.maxValue
            }
        }
        case "SET-ERROR": {
            return {
                ...state,
                error: action.errorValue
            }
        }
        case "SET-DISABLED": {
            return {
                ...state,
                disabled: action.disabledValue
            }
        }
        case "SET-DISABLED-EXCEPTION": {
            return {
                ...state,
                disabledException: action.disabledValue

            }
        }
        case "SET-START-VALUE-TO-LOCAL-STORAGE": {
            return {
                ...state,
                counter: action.value
            }
        }


        default: return state
    }
}


export type GenericType =
    incCounterACType
    | resetCounterACType
    | getStartValueACType
    | setCounterValueACType
    | getMaxValueACType
    | setErrorACType
    | setDisabledACType
    |setDisabledExceptionACType
    | setStartValueToLocalStorageACType;

export type incCounterACType = ReturnType<typeof incCounterAC>
export const incCounterAC = () =>{
    return{
        type: 'INC-COUNTER'
    } as const
}

export type resetCounterACType = ReturnType<typeof resetCounterAC>
export const resetCounterAC = (startValue: number) =>{
    return{
        type: 'RESET-COUNTER',
        startValue
    } as const
}
export type getStartValueACType = ReturnType<typeof getStartValueAC>
export const getStartValueAC = (startValue: number) =>{
    return{
        type: 'GET-START-VALUE',
        startValue
    } as const
}

export type setCounterValueACType = ReturnType<typeof setCounterValueAC>
export const setCounterValueAC = (startValue: number, value: boolean) =>{
    return{
        type: 'SET-START-VALUE',
        startValue,
        value

    } as const
}

export type getMaxValueACType = ReturnType<typeof getMaxValueAC>
export const getMaxValueAC = (maxValue: number) =>{
    return{
        type: 'GET-MAX-VALUE',
        maxValue
    } as const
}

export type setErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = (errorValue: boolean) =>{
    return{
        type: 'SET-ERROR',
        errorValue
    } as const
}

export type setDisabledACType = ReturnType<typeof setDisabledAC>
export const setDisabledAC = (disabledValue: boolean) =>{
    return{
        type: 'SET-DISABLED',
        disabledValue
    } as const
}

export type setDisabledExceptionACType = ReturnType<typeof setDisabledExceptionAC>
export const setDisabledExceptionAC = (disabledValue: boolean) =>{
    return{
        type: 'SET-DISABLED-EXCEPTION',
        disabledValue
    } as const
}

export type setStartValueToLocalStorageACType = ReturnType<typeof setStartValueToLocalStorageAC>
export const setStartValueToLocalStorageAC = (value: number) =>{
    return{
        type: 'SET-START-VALUE-TO-LOCAL-STORAGE',
        value
    } as const
}