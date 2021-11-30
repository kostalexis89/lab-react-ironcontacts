import './App.css';
import contactData from './contacts.json'
import React, { useState } from 'react'


function App() {
 

  // console.log(contactData[8])
  const setInitialValue = () => {
    return contactData.slice(0,5)
}
  const [contacts, setContacts] = useState(() => setInitialValue())
  console.log(contacts)

const addRandomContact = () => {
  let random = Math.floor(Math.random() * (contactData.length - contacts.length) + contacts.length);
  const newContact = contactData[random]
  
  setContacts(contacts => [newContact, ...contacts])
}

  //creating a list
  const contactList = contacts.map(contact => {
    return (
      <tr key={contact.id}>
        <td><img src={contact.pictureUrl} style={{height: '80px'}} alt='contactPic'></img></td>
        <td>{ contact.name }</td>
        <td>{ contact.popularity }</td>
        <td>{ contact.wonOscar ? <p>Oscar winner 🤩</p> : <p>no award</p>} </td>
      <td>{ contact.wonOscar ? <p>Emmy winner 🤩</p> : <p> no award </p>} </td>
      </tr>
    );
  })
 
 
  
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
            <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactList}
        </tbody>
      </table>
      <button onClick={addRandomContact}>Add Random Contact</button>
    </div>
  );
  
}

export default App;
