const { createStore } = require("redux");

const increment = {type: 'INCREMENT'}
const decrement = {type: 'DECREMENT'}

let initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state , count: state.count + 1};
        case 'DECREMENT':
            return {...state , count: state.count - 1};
        default:
            return state;
    }

}

const store = createStore(reducer);

store.dispatch(increment);
store.dispatch(increment);
store.dispatch(increment);

console.log(store.getState());