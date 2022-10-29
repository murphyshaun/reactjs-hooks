import { useEffect, useState } from 'react'

function Content() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        //Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
            console.log('remove event');
        }
    }, [])
    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
}

export default Content