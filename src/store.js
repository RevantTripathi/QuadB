import {createStore,combineReducers,applyMiddleware} from "redux"

import {thunk} from "redux-thunk";
import TodoReducer from "./reducer/Todoreducer";

//this will store all the reducers
const rootreducers = combineReducers({
    Todo: TodoReducer,

})

//set intial state
const intialState ={}



const store = createStore(
    rootreducers,
    intialState,
    applyMiddleware(thunk)
)

export default store;
