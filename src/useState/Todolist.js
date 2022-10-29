
import { useState } from 'react'

function App() {
  
    const [job, setJob] = useState('')
    const [listJob, setListJob] = useState(() => {
        const storeJobs = localStorage.getItem('jobs')

        return JSON.parse(storeJobs) ?? []
    })

    const handleJob = () => {
        setListJob(prev => {
            const newJobs = [...listJob, job]

            const jsonJobs = JSON.stringify(newJobs)

            localStorage.setItem('jobs', jsonJobs)
            return newJobs
        })
        setJob('')
    }

  return (
    <div style={{padding: 20}}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleJob}>ADD</button>

      <div>
        <ul>
            {
                listJob.map(job => (
                    <li>
                       {job} 
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
  );
}

export default App;
