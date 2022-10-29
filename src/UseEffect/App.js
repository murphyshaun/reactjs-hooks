import { useState } from 'react'
import Content from './ResizeEvent'


function App() {
    const [show, setShow] = useState(true)
    //show = true => mounted
    //show = false => unmounted
    return (
        <div style={{padding: 20}}>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show &&  <Content />}
        </div>
    );
}

export default App;
