import { SET_TODO, ADD_TODO } from "./Contants"

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todoInput: action.payload
            }            
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }            
    
        default:
            throw new Error('Invalid action.')
    }
}

export { initState }
export default reducer