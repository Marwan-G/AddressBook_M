import React, { Component } from 'react';
import './App.css';
import ContactList from './contactlist.jsx';
import shortid from 'shortid';
  class App extends React.Component {
    constructor(){
      super();
      this.state = {
        editing:'',
        contacts: [{country: "libya", email: 'ghabin2004@gmail.com', firstName:'Marwan',lastName:'ghabin',id:'xyzf'},
        {country: "Argentina", email: 'Messi@gmail.com', firstName:'Messi',lastName:'carlos',id:'xyz'}],
        contact:{
          id: shortid.generate(),
          firstName:'',
          lastName: '',
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
            <div className='contacts'>
              <ContactList contacts={this.state.contacts} contact={this.state.id}/>
            </div>
         </div>
        );
      }
  }


export default App;
