import React from 'react';
import ReactDOM from 'react-dom';
import './style/app.css'
import contacts from './contacts.json'

function fillContact(contact, index) {
  return (
    <div className="contact" data-id="id" onClick={() => showDetails(index)}>
      <span className="avatar small">&#9787;</span>
      <span className="title">{contact.firstName} {contact.lastName}</span>
    </div>
  )
}

function fillDetails(contact) {
  return (
    <div>
      <h1>Details</h1>
      <div className="content">
        <div className="info">
          <div className="col">
            <span className="avatar">&#9787;</span>
          </div>
          <div className="col">
            <span className="name">{contact.firstName}</span>
            <span className="name">{contact.lastName}</span>
          </div>
        </div>
        <div className="info">
          <span className="info-line">&#9742; {contact.phone}</span>
          <span className="info-line">&#9993; {contact.email}</span>
        </div>
      </div>
    </div>
  )
}

function showDetails (index) {
  const contact = contacts[index]
  const details = fillDetails(contact)
  ReactDOM.render(details , document.getElementById('details'))
}

function showContacts () {
  let allContacts = []
  for(let index in contacts) {
    allContacts.push(fillContact(contacts[index], index))
  }
  return allContacts
}

const App = (
  <div className="container">
    <header>&#9993; Contact Book</header>
    <div id="book">
      <div id="list">
        <h1>Contacts</h1>
        <div className="content">
          {showContacts()}
        </div>
      </div>
      <div id="details">
      </div>
    </div>
    <footer>Contact Book SPA &copy; 2017</footer>
  </div>
)

export default App
