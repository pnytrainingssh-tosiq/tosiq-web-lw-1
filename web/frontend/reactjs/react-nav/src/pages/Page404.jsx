import React from 'react'
import Navbar from '../components/Navbar'
import NotFoundImg from '../assets/pagenotfound.png'
const Page404 = () => {
  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-6xl'>
        <div className='notfoundimg'></div>
      </div>
    </div>
  )
}

export default Page404
