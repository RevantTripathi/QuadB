
const TodoReducer = (state = {todos:[] }, action) =>{
    switch(action.type){
        case "ADD_TASK":

            return { todos: action.payload};
        case "REMOVE_TASK":
            // return { todos: action.payload};
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id) // Filter out the todo to be removed
              };
        default:
            return state;
    }
}

export default TodoReducer;