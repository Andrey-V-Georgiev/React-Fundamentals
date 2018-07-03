import React from 'react'

class UnauthorisedButtons extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-md navbar-danger fixed-top bg-dark">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="submit" className="btn btn-info" onClick={() => window.location.href = '/login'}>Login</button>
          <button type="submit" className="btn btn-info" onClick={() => window.location.href = '/register'}>Register
          </button>
        </div>
      </nav>
    )
  }
}

export default UnauthorisedButtons