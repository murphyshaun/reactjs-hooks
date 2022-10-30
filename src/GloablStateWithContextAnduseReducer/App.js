import { useStore, actions } from './store'


function App() {
    const [state, dispatch] = useStore()
    const {todos, todoInput} = state
    
    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))
    }

    console.log(todos);
    return (
        <div style={{padding: 20}}>
            <input 
                value={todoInput}
                placeholder="Enter todo..."
                onChange={e => dispatch(actions.setTodo(e.target.value))}
            />

            <button onClick={handleAdd}>Add</button>

            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;

