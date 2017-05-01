import React from 'react';
import ContactItem from './contactitem.jsx';

const ContactList = (props) => {
  return (
    <div className="ContactList">
      <div>
         <h2>Contacts</h2>
          <div>
          <ContactItem />

          </div>
      </div>
    </div>
  );
}
export default ContactList;
