import { useState } from 'react'
import Content from './Content'

function App() {
    const [show, setShow] = useState(true)
    //show = true => mounted
    //show = false => unmounted
    return (
        <div style={{padding: 20}}>
            {show &&  <Content />}
            <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
    );
}

export default App;
