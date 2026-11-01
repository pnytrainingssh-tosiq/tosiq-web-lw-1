import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  const links = [
    {url: '/', text: "Home"},
    {url: '/about-us', text: "About us"},
  ]

  return (
    <div className='w-fit mx-auto my-5'>
      <nav className='flex items-center gap-3 shadow bg-white rounded-full p-3'>
        {
          links.map((link) => {
            return (
              <NavLink key={link.url}
              className={({ isActive }) =>
                isActive ? "px-3 py-2 rounded-full bg-teal-500 text-white font-bold" : "text-gray-600"
              }
              to={link.url}>{link.text}</NavLink>
            )
          })
        }
      </nav>
    </div>
  )
}

export default Navbar
