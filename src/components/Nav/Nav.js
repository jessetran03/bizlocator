import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './Nav.css'

export default function Nav() {

  return (
    <nav className='nav'>
      <Link to='/'>
        <h1>BizLocator</h1>
      </Link>
      <SearchBar/>
    </nav>
  )
}