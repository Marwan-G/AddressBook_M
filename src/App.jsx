import React, { Component } from 'react';
import './App.css';
import ContactList from './contactlist.jsx';
class App extends React.Component {
    constructor(){
      super();
    this.state = {
        editing:'',
        contacts: [],
        contact:{
        firstName:'Marwan',
        lastName: 'Ghabin',
        email:'',
        country: ''
      }
      }
    }
render(){
  return(
   <div className='App'>
      <div className='AppHeader'>
        <h2>Address Book</h2>
      </div>
      <div>
       <ContactList  name={ this.state.firstname}/>
     </div>
  </div>
  );
 }
}

export default App;
