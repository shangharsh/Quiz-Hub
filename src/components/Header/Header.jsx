import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='text-center fs-3'>
      <Link to="/" className='text-decoration-none text-secondary'>Quiz Hub</Link>
      <hr className='divider'/>
    </div>
  )
}

export default Header