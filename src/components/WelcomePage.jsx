import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage({userAction}) {
  return (
    <div>
        <h1>Welcome to react application</h1>
        <Link to="/FormInput" className='btn btn-primary'>FORMINPUT PAGE</Link>  
    </div>
  )
}

export default WelcomePage