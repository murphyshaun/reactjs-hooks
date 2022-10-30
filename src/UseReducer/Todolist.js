
import { useReducer, useRef } from 'react'
import reducer, { initState } from './Todo/reducer'
import {addJob, setJob, deleteJob} from './Todo/actions'
import logger from './Todo/logger'

function App() {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    
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
            </div>
        </div>
    );
}

export default App;
