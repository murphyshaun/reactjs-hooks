import { useState } from "react";

const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'ReactJS'
    },
]
function App() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [checkedRadio, setCheckedRadio] = useState(2)
    const [checkedCheckbox, setCheckedCheckbox] = useState([])

    const handleRegister = () => {
        //call api


    }

    const handleCheckbox = (id) => {
        setCheckedCheckbox(prev => {
            const isChecked = checkedCheckbox.includes(id)

            if (isChecked){
                //uncheck
                return prev.filter(item => item !== id)
            }else{
                return [...prev, id]                
            }
        })
        
    }
    console.log(checkedCheckbox);
    return (
        <div style={{ padding: 20 }}>
            <h1>{checkedRadio || 'empty'}</h1>
            <input 
                onChange={e => setName(e.target.value)}
                value={name}
            />
            <input 
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <div>
                {
                    courses.map(course => (
                        <div key={course.id}>
                            <input type="radio" 
                                checked={checkedRadio === course.id}
                                onChange={() => setCheckedRadio(course.id)}    
                            />
                            {course.name}
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    courses.map(course => (
                        <div key={course.id}>
                            <input type="checkbox" 
                                checked={checkedCheckbox.includes(course.id)}
                                onChange={() => handleCheckbox(course.id)}    
                            />
                            {course.name}
                        </div>
                    ))
                }
            </div>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default App;