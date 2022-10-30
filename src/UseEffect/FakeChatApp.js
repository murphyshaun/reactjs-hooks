import { useEffect, useState } from 'react'

const lessons = [
    {
        id: 1,
        name: 'reactjs'
    },
    {
        id: 2,
        name: 'angular'
    },
    {
        id: 3,
        name: 'vuejs'
    },
]
function Content() {
    const [lessionId, setLessionId] = useState(1)

    useEffect(() => {
        // const handleComment = (e) => {
        //     console.log(e);
        // }
        
        // Destructuring assignment
        const handleComment = ({detail}) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessionId}`, handleComment)
        
        //cleanup function
        return () => {
            window.removeEventListener(`lesson-${lessionId}`, handleComment)
        }
    }, [lessionId])
    return (
        <div>
            <ul>
                {
                    lessons.map(lesson => (
                        <li key={lesson.id}
                        style={lessionId === lesson.id ? {
                            color: 'red'
                        } : {}}
                        onClick={() => setLessionId(lesson.id)}    
                        >
                            {lesson.name}
                            
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Content