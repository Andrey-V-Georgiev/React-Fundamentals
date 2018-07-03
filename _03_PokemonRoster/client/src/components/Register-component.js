import React from 'react'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {
        email: '',
        repeatEmail: '',
        name: '',
        password: '',
        repeatedPassword: ''
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
    const url = 'http://localhost:5000/auth/signup'
    const options = {
      method: 'POST',
      body: JSON.stringify(this.state.form),
      headers: {'content-type': 'application/json'},
    }

    console.log(options)
    fetch(url, options)
      .then(data => data.json())
      .then(res => console.log(res))
  }

  render () {
    return (
      <div>
        <form className="form-register">
          <h1 className="h3 mb-3 font-weight-normal">Register</h1>

          <input name="email" type="email" onChange={this.handleChange} className="form-control"
                 placeholder="Email"/>
          <input name="repeatEmail" type="email" onChange={this.handleChange} className="form-control"
                 placeholder="Confirm email"/>
          <input name="name" type="text" onChange={this.handleChange} className="form-control"
                 placeholder="Username"/>
          <input name="password" type="password" onChange={this.handleChange} className="form-control"
                 placeholder="Password"/>
          <p>Password must be at least 8 characters long</p>
          <input name="repeatedPassword" type="password" onChange={this.handleChange} className="form-control"
                 placeholder="Confirm password"/>

          <button type="button" onClick={this.handleSubmit} className="btn btn-lg btn-info btn-block">Sign up</button>
          <p className="mt-5 mb-3 text-muted">© 2018</p>
        </form>
      </div>
    )
  }
}

export default Register