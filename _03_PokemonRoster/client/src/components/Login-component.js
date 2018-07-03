import React from 'react'

class Login extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      form: {
        email: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    let key = event.target.name
    let value = event.target.value

    let newObj = {}
    newObj[key] = value
    this.setState({form: Object.assign(this.state.form, newObj)})
  }

  handleSubmit () {
    const url = 'http://localhost:5000/auth/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(this.state.form),
      headers: {'content-type': 'application/json'},
    }

    fetch(url, options)
      .then(data => data.json())
      .then(res => {
        if (res.success && res.token) {
          window.localStorage.setItem('authtoken', res.token)
          window.location.href = '/all'
        }
      }).catch(err => console.log(err))
  }

  render () {
    return (
      <form className="form-login">
        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
        <input type="email" name="email" onChange={this.handleChange} className="form-control" placeholder="Email"/>
        <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Password"/>
        <button type="button" onClick={this.handleSubmit} className="btn btn-lg btn-info btn-block">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2018</p>
      </form>
    )
  }
}

export default Login