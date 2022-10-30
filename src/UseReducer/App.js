import { useReducer } from 'react'

//init state
const initState = 0

//Acctions
const UP_ACTION = 'UP'
const DOWN_ACTION = 'down'

//Reducer
const reducer = (state, action) => {
    console.log('reducer running...');
    switch(action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }

}
function App() {
    const [count, dispatch] = useReducer(reducer, initState)
    
    return (
        <div style={{padding: 20}}>
            <h1>{count}</h1>
            
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </div>
    );
}

export default App;

