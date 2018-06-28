import React from 'react'

export default class Details extends React.Component {
  render () {

    if (this.props.id) {
      return (
        <section id="bio">
          <div className="image">
            <img src={this.props.url} alt=""/>
          </div>
          <div className="info">
            <p>Name: <strong>{this.props.name}</strong></p>
            <p>Bio:{this.props.bio}</p>
            <p></p>
          </div>
        </section>
      )
    } else {
      return <p>Click on images for more details!</p>
    }
  }
}