import {SET_TODO, ADD_TODO, DELETE_TODO} from './Contants'

//2. Actions
export const setTodo = payload => {
    return {
        type: SET_TODO,
        payload
    }
}
export const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const deleteTodo = payload => {
    return {
        type: DELETE_TODO,
        payload
    }
}