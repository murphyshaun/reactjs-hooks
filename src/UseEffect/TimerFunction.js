import { useEffect, useState } from 'react'

function Content() {
    const [countDown, setCountDown] = useState(200)

    useEffect(() => {
        const timerId = setInterval(() => {
            //countDown luôn là 200 => hàm đóng (closure)
            //countDown tham chiếu phạm vị hàm useEffect => tham chiếu giá trị ban đầu 
            //=> dùng callback để xử lý OR dùng setTimeout có dependencies là countdown vì nó sẽ chạy lại hàm callback
            // setCountDown(countDown - 1)

            setCountDown(prev => prev - 1)
            console.log('count down...');
        }, 1000);

        //cleanup function
        return () => clearInterval(timerId)
    }, [])

    // useEffect(() => {
    //     const timerId = setTimeout(() => {
    //         setCountDown(countDown - 1)
    //     }, 1000)

    //     return () => clearInterval(timerId)
    // }, [countDown])
    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    )
}

export default Content