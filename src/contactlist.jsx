import React from 'react';
import ContactItem from './contactitem.jsx';

const ContactList = (props) => {

  return (
    <div className="ContactList">
          <div>
                   { !!props.contacts.length?
                   
                   <div>
                    {props.contacts.map((contact) => <ContactItem key={contact.id} contact={contact} /> )}
                   </div>
                   :
                   <div>
                     <h3>empty array</h3>
                   </div>}
          </div>

    </div>
  );
}
export default ContactList;
