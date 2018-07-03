import React from 'react'

class AuthorisedButtons extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-md navbar-danger fixed-top bg-dark">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="submit" className="btn btn-info" onClick={() => window.location.href = '/add'}>Add</button>
          <button type="submit" className="btn btn-info" onClick={() => window.location.href = '/all'}>All</button>
          <button type="submit" className="btn btn-secondary"
                  onClick={() => {
                    window.localStorage.clear()
                    window.location.href = '/login'
                  }}>Logout</button>
        </div>
      </nav>
    )
  }
}

export default AuthorisedButtons