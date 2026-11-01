import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='w-fit mx-auto my-5'>
      <nav className='flex gap-3 shadow bg-white rounded-full py-3 px-5'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about-us'}>About us</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
