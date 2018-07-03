import React from 'react'
import AuthorisedButtons from './AuthorisedButtons'
import UnathorisedButtons from './UnauthorisedButtons'

class Header extends React.Component {

  render () {
    let buttons = window.localStorage.getItem('authtoken') ? <AuthorisedButtons/> : <UnathorisedButtons/>

    return (
      <nav className="navbar navbar-expand-md navbar-danger fixed-top bg-dark">
        <div className="btn-group" role="group" aria-label="Basic example">
          {buttons}
        </div>
      </nav>
    )
  }
}

export default Header

