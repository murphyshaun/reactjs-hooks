import { useCallback, useState } from 'react'
import Content from './Content'


function App() {
    const [count, setCount] = useState(0)
    
    const increase = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])

    return (
        <div style={{padding: 20}}>
            <Content onIncrease={increase} />
            <h1>{count}</h1>
            
        </div>
    );
}

export default App;

