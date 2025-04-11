import React from 'react'
import Dashboard from './pages/Dashboard'

const App = () => {
  return(
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
    <div className='fixed inset-0 z-0'>
       <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
       <div className='absolute inset-0 backdrop-blur-sm'/>
    </div>
    <div className='z-1 w-full'>
      <Dashboard/>
    </div>
  </div>
  )
}

export default App