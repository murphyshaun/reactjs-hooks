import { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = useState('')
    const [dataRender, setdataRender] = useState([])
    const [type, setType] = useState('posts')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(data => {
            setdataRender(data)
        })
    }, [type])

    
    return (
        <div>
            <div>
                {
                    tabs.map(tab => (
                        <button 
                            key={tab}
                            style={type === tab ? {
                                color: '#fff',
                                background: '#333'
                            } : {}}
                            onClick={() => setType(tab)}
                            >
                            
                                {tab}
                        </button>
                    ))
                }
            </div>
            <div>
                <input 
                    value={title}
                    onChange={e => setTitle(e.target.value)}    
                />
            </div>
            <ul>
                {
                    dataRender.map(data => (
                        <li key={data.id}>
                            {data.title || data.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Content