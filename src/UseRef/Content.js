import { useRef, useState, useEffect } from 'react'

// let timerId => useRef

function Content() {
    const [count, setCount] = useState(60)

    //timerId sẽ tham chiếu bên ngoài function content và giữ lại đưcọ timerId khi re-render 
    const timerId = useRef() 
    const prevCont = useRef()
    const h1Ref = useRef() // luôn luôn lấy được vị trí thẻ h1

    useEffect(() =>{
        prevCont.current = count
    }, [count])

    useEffect(() => {
        console.log(h1Ref.current);
    })

    const hanldeStart = () => {
        //fix trường hợp click nhanh button start
        if (!timerId.current){
            timerId.current = setInterval(() => {
                setCount(prev => prev - 1)
            }, 1000)
    
            console.log(timerId.current);
        }
    }

    const hanldeStop = () => {
        clearInterval(timerId.current)
        timerId.current = undefined
        console.log(timerId.current);
    }
    return (
        <div style={{padding: 20}}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={hanldeStart}>Start</button>
            <button onClick={hanldeStop}>Stop</button>
        </div>
    );
}

export default Content;