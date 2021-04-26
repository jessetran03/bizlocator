import React from 'react';
import { Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import BusinessList from './pages/BusinessList/BusinessList'
import BusinessPage from './pages/BusinessPage/BusinessPage'
import HomeNav from './components/Nav/HomeNav'
import Nav from './components/Nav/Nav'
import './App.css'

export default function App() {
  function renderNavRoutes() {
    return (
      <>
        <Route
          exact
          path='/'
          component={HomeNav}
        />
        <Route
          path='/search'
          component={Nav}
        />
        <Route
          path='/businesses'
          component={Nav}
        />
      </>
    )
  }
  function renderMainRoutes() {
    return (
      <>
        <Route
          exact
          path='/'
          component={Home}
        />
        <Route
          exact
          path='/search'
          component={BusinessList}
        />
        {['/businesses/:businessId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={BusinessPage}
          />
        )}
      </>
    )
  }

  return (
    <>
      {renderNavRoutes()}
      <main>
        {renderMainRoutes()}
      </main>
    </>
  )
}