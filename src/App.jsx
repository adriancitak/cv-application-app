import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/PersonalInfo'
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'

function App() {
  
  const [canEdit, setCanEdit] = useState(false)

  function handleClick(){
    setCanEdit(prev => !prev)
  }
  

  return (
    <>
      <PersonalInfo canEdit={canEdit}/>
      <Education canEdit={canEdit} />
      <WorkExperience canEdit={canEdit}/>
      <button className='edit-btn' onClick={handleClick}>Enable Edits</button>
    </>
  )
}

export default App
