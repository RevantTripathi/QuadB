
// this action will recieve the state of list from home component and then will call the reducer 
export const AddTodoAction = (todo) =>(dispatch,getState) =>{
    const{
        Todo:{todos},
    }= getState();

    //check if task is already present
    const hasTask = todos.find((i) => i.todo === todo);
    
    if(!hasTask && todo !== ''){
        dispatch({
            type:"ADD_TASK",
            payload:[{id: todo, todo}, ...todos],            
        }
        )
    }    
};


//this action will help in deleting the task from the list
export const RemoveTodoAction= (todo) =>(dispatch,getState) =>{
    const{
        Todo:{todos},
    } = getState();

    dispatch({
        type:"REMOVE_TASK",
        payload:todo
        
    })
}


