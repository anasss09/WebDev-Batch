import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./action/CounterAction";

const Counter = () => {
    const dispatch = useDispatch()
    let counter = useSelector(state => state.CounterReducer) 
	return (
		<div>
			<button onClick={()=> {dispatch(increment())}}>+</button>
			<span> {counter} </span>
			<button onClick={()=> {dispatch(decrement())}}>-</button>
		</div>
	);
};

export default Counter;
