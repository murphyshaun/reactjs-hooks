import { useEffect, useLayoutEffect, useState } from 'react'

function Content() {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     if (count > 3){
    //         setCount(0) 
    //         //bị chớp khi ui render ra số 4 rồi useEffect mới hoạt động set lại bằng 
    //     }
    // }, [count])

    useLayoutEffect(() => {
        if (count > 3){
            setCount(0) 
        }
    }, [count])

    const hanldeRun = () => {
        setCount(count + 1)
    }
    return (
        <div style={{padding: 20}}>
            <h1>{count}</h1>
            <button onClick={hanldeRun}>Run</button>
            {console.log(count)}
        </div>
    );
}

export default Content;