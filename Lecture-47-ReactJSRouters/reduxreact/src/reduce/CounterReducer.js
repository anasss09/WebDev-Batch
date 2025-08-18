let initialState = 0;

function CounterReducer(state = initialState, action) {
    switch(action.type) {
        case 'increment/counter':
            return state + 1;
        case 'decrement/counter':
            return state > 0 ? state -1 : state
        default:
            return state
    }
}

export default CounterReducer;