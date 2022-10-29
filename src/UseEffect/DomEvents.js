import { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = useState('')
    const [dataRender, setdataRender] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(data => {
            setdataRender(data)
        })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 20){
                //show
                setShowGoToTop(true)
            }else{
                //hide
                setShowGoToTop(false)
            }
        }

        //note: khi component bị unmounted thì listener này không bị unmounted => rò rỉ bộ nhớ (memory leak) => cần dùng cleanup function
        window.addEventListener('scroll', handleScroll)

        //Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
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
            {
                showGoToTop && (
                    <button
                        style={{
                            position: 'fixed',
                            right: 20,
                            bottom: 20
                        }}
                    >
                        Go to top
                    </button>
                )
            }
        </div>
    )
}

export default Content