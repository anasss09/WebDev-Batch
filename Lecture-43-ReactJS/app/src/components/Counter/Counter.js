import React, { useState } from "react";
import classes from './Counter.module.css'

const Counter = () => {
	let initilValue = 0;
	const [counter, setCounter] = useState(initilValue);

	function Increase() {
		if (counter < 10) setCounter(counter + 1);
	}

	function decrease() {
		if (counter > 0) setCounter(counter - 1);
	}

	return (
		<div className={classes['counter']}>
			<button onClick={decrease}>-</button>
			<span>Counter: {counter}</span>
			<button onClick={Increase}>+</button>
		</div>
	);
};

export default Counter;
