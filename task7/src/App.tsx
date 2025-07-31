import { Route , Routes } from 'react-router-dom'
import './App.css'
import { JobCard } from './components/JobCard'
import { JobDashboard } from './components/JobDashboard'
import { useEffect, useState } from 'react'






function App() {
  const [jobs , setJobs] = useState([])

  useEffect (() => {
    fetch('https://akil-backend.onrender.com/opportunities/search')
    .then(response => response.json())
    .then(res => setJobs(res.data))
    .catch(err => console.log(err))
  }, [])
  
  return (
    <Routes>
      <Route path='/' element= {<JobCard jobs = {jobs}/>}/>
      <Route path='/jobs/:id' element= {<JobDashboard jobs = {jobs}/>}/>
    </Routes>
  )
}

export default App
