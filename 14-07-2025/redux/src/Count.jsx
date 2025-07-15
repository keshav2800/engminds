import React from "react"
import {useSelector, useDispatch} from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";



export default function Count() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <div> count: {count} </div>
            <button onClick={() =>{dispatch(increment())}}>increment+1</button>
            <button onClick={()=>{dispatch(decrement())}}>decrement-1</button>
            <button>increment +100</button>
        </>
    );
}