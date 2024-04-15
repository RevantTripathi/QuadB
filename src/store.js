import {createStore,combineReducers,applyMiddleware} from "redux"

import {thunk} from "redux-thunk";
import TodoReducer from "./reducer/Todoreducer";

//this will store all the reducers
const rootreducers = combineReducers({
    Todo: TodoReducer,

})

//set intial state
const intialState ={}


//to create the store
const store = createStore(
    rootreducers,
    intialState,
    applyMiddleware(thunk)
)

export default store;
