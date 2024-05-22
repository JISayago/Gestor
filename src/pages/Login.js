import React from 'react'
import LoginForm from '../components/LoginForm'

function Login({setIsAuthenticated,setIsAdmin}) {
  return (
    <div className='flex flex-col justify-center w-full h-screen bg-negro-1'>
      <LoginForm setIsAuthenticated={setIsAuthenticated} setIsAdmin={setIsAdmin} />
    </div>
  )
}

export default Login