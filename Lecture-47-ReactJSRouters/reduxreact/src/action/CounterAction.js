function increment() {
	return {
		type: "increment/counter",
	};
}

function decrement() {
	return {
		type: "decrement/counter",
	};
}

export { increment, decrement };
