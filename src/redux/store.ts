
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "./local-storage";
import {combineReducers, createStore, Store} from "redux";


const RootReducer = combineReducers({
    counter: counterReducer
})
export type  RootReducerType = ReturnType<typeof RootReducer>

export let store: Store<RootReducerType> = createStore(RootReducer, loadState())

store.subscribe(()=> {
    saveState({
        counter: store.getState().counter
    })
})


//@ts-ignore
console.log(window.store = store)