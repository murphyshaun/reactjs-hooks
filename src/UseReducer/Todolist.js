
import { useReducer, useRef } from 'react'
//useReducer
//1.Init state
const initState = {
    job: '',
    listJob:  []
}

//2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

//3. Reducer
const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                listJob: [...state.listJob, action.payload]
            }
            break
        case DELETE_JOB:
            const newJobs = [...state.listJob]
            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                listJob: newJobs
            }
            break
        default:
            throw new Error('Invalid action.')
    }
    console.log(newState)
    return newState
}

//4. Dispatch
function App() {
    const [state, dispatch] = useReducer(reducer, initState)
    
    const {job, listJob} = state

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    const inputRef = useRef()
    return (
        <div style={{padding: 20}}>
        <input
            ref={inputRef}
            placeholder='Enter todo...'
            value={job}
            onChange={e => dispatch(setJob(e.target.value))}
        />
        <button onClick={handleSubmit}>ADD</button>

        <div>
            <ul>
                {
                    listJob.map((job, index) => (
                        <li key={index}>
                        {job} <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                        </li>
                    ))
                    
                }
            </ul>
            {console.log(111)}
        </div>
        </div>
    );
}

export default App;
