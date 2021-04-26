import React from 'react'
import { Link } from 'react-router-dom'
import './HomeNav.css'

export default function HomeNav() {

  return (
    <nav className='home-nav'>
      <Link to='/'>
        <h1>BizLocator</h1>
      </Link>
    </nav>
  )
}