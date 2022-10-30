import {SET_JOB, ADD_JOB, DELETE_JOB} from './contants'


//1.Init state
export const initState = {
    job: '',
    listJob:  []
}

//3. Reducer
const reducer = (state, action) => {
    
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
            
        case ADD_JOB:
            return {
                ...state,
                listJob: [...state.listJob, action.payload]
            }
            
        case DELETE_JOB:
            const newJobs = [...state.listJob]
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                listJob: newJobs
            }
            
        default:
            throw new Error('Invalid action.')
    }

}

export default reducer