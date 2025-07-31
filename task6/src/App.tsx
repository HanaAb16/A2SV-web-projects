import { Route , Routes } from 'react-router-dom'
import './App.css'
import { JobCard } from './components/JobCard'
import { JobDashboard } from './components/JobDashboard'





function App() {

  
  return (
    <Routes>
      <Route path='/' element= {<JobCard/>}/>
      <Route path='/jobs/:id' element= {<JobDashboard/>}/>
    </Routes>
  )
}

export default App
