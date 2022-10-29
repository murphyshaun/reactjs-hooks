import { useEffect, useState } from 'react'

function Content() {
    const [title, setTitle] = useState('')

    useEffect(() => {
        console.log('mounted2');
        document.title = title
    })

    return (
        <div>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}    
            />
            {console.log('mounted1')}
        </div>
    )
}

export default Content