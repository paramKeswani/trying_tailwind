import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Payouts from './Payouts'
import Sidebar from './Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='flex flex-row h-max'>
      <div className='sidebar  w-12  md:w-40 border  bg-sky-500 '>
        <Sidebar className = "fixed"></Sidebar>
      </div>
      <div className='main-content  w-screen'>
      <Payouts></Payouts>

      </div>
    </div>

    
      
    </>
  )
}

export default App
