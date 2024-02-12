import { Component } from 'react';
import css from './ContactList.module.css';

class ContactsList extends Component {
  render() {
    const { filter, contacts } = this.props;
    return (
      <div className={css.contacts}>
        <ul>
          {contacts.map(contact => {
            return (
              contact.name.toLowerCase().includes(filter.toLowerCase()) && (
                <li key={contact.id} className={css.title}>
                  {contact.name}: {contact.number}
                </li>
              )
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactsList;
