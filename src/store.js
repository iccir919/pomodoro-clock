import { createStore } from 'redux';

const reducer = ( state = true ) => {
    return state;
}

const store = createStore(reducer);

export default store;